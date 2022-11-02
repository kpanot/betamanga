export const jwtConstants = {
  secret: process.env.JWT_SECRET || 'secretKey',
  expiresIn: 3600,
} as const;
