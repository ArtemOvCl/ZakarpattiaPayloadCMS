import { Access } from 'payload';
import payload from 'payload';

import { USER_KEY, MAX_COUNT } from '../constants/user.constants';

export const cannotEditSelf: Access = ({ req, id }) => {
  if (!req.user) return false;
  return req.user.id !== id; 
};

export const cannotCreateUsersIfTwoExist: Access = async ({ req, req: { payload } }) => {

  const existingCount = await payload.find({
    collection: USER_KEY,
    limit: 0, 
  });

  return existingCount.totalDocs < MAX_COUNT;
};