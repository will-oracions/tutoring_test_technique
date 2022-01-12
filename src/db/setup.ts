import { getConnectionOptions, getConnection } from 'typeorm';

// const DEFAULT_NAME = 'default';

export const getDbConnectionOptions = async (name = 'default') => {
  const options = await getConnectionOptions(
    process.env.NODE_ENV || 'development',
  );
  return { ...options, name };
};

export const getDbConnection = async (name = 'default') => {
  return await getConnection(name);
};

export const runMigrations = async (name = 'default') => {
  const connection = await getConnection(name);
  return connection.runMigrations();
};
