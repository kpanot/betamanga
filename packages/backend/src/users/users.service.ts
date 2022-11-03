import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { profileComplexFields } from '../profiles/profile.model';
import { User, UserDocument } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  public async getByName(userName: string) {
    return this.userModel.findOne({ name: userName }).exec();
  }

  public async updateRefreshToken(userId: string, refreshToken: string) {
    await this.userModel
      .findByIdAndUpdate(userId, { $set: { refreshToken } })
      .orFail()
      .exec();
  }

  public async getUser(userId: string) {
    const user = await this.userModel.findById(userId).orFail().exec();

    return user;
  }

  public async getUserWithProfile(userId: string) {
    const user = await this.userModel
      .findById(userId)
      .populate({
        path: 'profile',
        populate: profileComplexFields,
      })
      .orFail()
      .exec();

    return user;
  }
}
