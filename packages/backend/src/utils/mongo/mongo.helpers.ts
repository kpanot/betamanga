interface TransformFactoryOptions {
  /** Indicate if the transform function remove the ID field */
  filterId?: boolean;
}

export const hidePrivateFieldsTransformFactory =
  (options?: TransformFactoryOptions) => (_doc: any, ret: any) => {
    Object.keys(ret)
      .filter(
        (key) => key.startsWith('_') && (key !== '_id' || options?.filterId),
      )
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      .forEach((key) => delete ret[key]);
    return ret;
  };
