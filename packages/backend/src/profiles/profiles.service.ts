import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Profile,
  profileComplexFields,
  ProfileDocument,
} from './profile.model';
import { Model } from 'mongoose';
import { LoggedInUser } from '../auth/auth.interfaces';
import { UsersService } from '../users/users.service';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectModel(Profile.name)
    private readonly profileModel: Model<ProfileDocument>,
    private readonly userService: UsersService,
  ) {}

  public async getMe(user: LoggedInUser): Promise<Profile> {
    const userWithProfile = await this.userService.getUserWithProfile(
      user.userId,
    );

    return userWithProfile.profile;
  }

  /**
   *
   * @param profileName Name of the profile to retrieve
   * @returns Profile object
   */
  public async getByName(profileName: string): Promise<Profile> {
    const profile = await this.profileModel
      .findOne({ name: profileName })
      .populate(profileComplexFields)
      .orFail()
      .exec();

    return profile;
  }
}
