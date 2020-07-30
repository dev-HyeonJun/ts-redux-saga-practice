export function createAsyncActionNames(type: string): string[] {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
}
