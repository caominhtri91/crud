import jwt from 'jsonwebtoken';

export const decrypt = (encrypted: string, secret: string): any => {
  return jwt.verify(encrypted, secret);
};

export const encrypt = (obj: Object, secret: string, expires: string) => {
  return jwt.sign(obj, secret, { expiresIn: expires, noTimestamp: true });
};

export const encryptToken = (obj: object, secret: string, expires: string) => {
  return encrypt(obj, secret, expires);
};

export const decryptToken = (str: string, secret: string) => {
  return decrypt(str, secret);
};
