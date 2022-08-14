import { emptySplitApi as api } from '@client/store/api';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    appControllerGetOpenApi: build.query<
      AppControllerGetOpenApiApiResponse,
      AppControllerGetOpenApiApiArg
    >({
      query: () => ({ url: `/` }),
    }),
    usersControllerCreate: build.mutation<
      UsersControllerCreateApiResponse,
      UsersControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/users`,
        method: 'POST',
        body: queryArg.createUserDto,
      }),
    }),
    usersControllerFindAll: build.query<
      UsersControllerFindAllApiResponse,
      UsersControllerFindAllApiArg
    >({
      query: () => ({ url: `/api/users` }),
    }),
    usersControllerFindOne: build.query<
      UsersControllerFindOneApiResponse,
      UsersControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/api/users/${queryArg.email}` }),
    }),
    usersControllerUpdate: build.mutation<
      UsersControllerUpdateApiResponse,
      UsersControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/users/${queryArg.id}`,
        method: 'PATCH',
        body: queryArg.updateUserDto,
      }),
    }),
    usersControllerRemove: build.mutation<
      UsersControllerRemoveApiResponse,
      UsersControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/api/users/${queryArg.id}`,
        method: 'DELETE',
      }),
    }),
    projectControllerCreate: build.mutation<
      ProjectControllerCreateApiResponse,
      ProjectControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/project`,
        method: 'POST',
        body: queryArg.createProjectDto,
      }),
    }),
    projectControllerFindAll: build.query<
      ProjectControllerFindAllApiResponse,
      ProjectControllerFindAllApiArg
    >({
      query: () => ({ url: `/api/project` }),
    }),
    projectControllerFindOne: build.query<
      ProjectControllerFindOneApiResponse,
      ProjectControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/api/project/${queryArg.id}` }),
    }),
    projectControllerUpdate: build.mutation<
      ProjectControllerUpdateApiResponse,
      ProjectControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/project/${queryArg.id}`,
        method: 'PATCH',
        body: queryArg.updateProjectDto,
      }),
    }),
    projectControllerRemove: build.mutation<
      ProjectControllerRemoveApiResponse,
      ProjectControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/api/project/${queryArg.id}`,
        method: 'DELETE',
      }),
    }),
    projectControllerUpdateAppearance: build.mutation<
      ProjectControllerUpdateAppearanceApiResponse,
      ProjectControllerUpdateAppearanceApiArg
    >({
      query: (queryArg) => ({
        url: `/api/project/appearance/${queryArg.id}`,
        method: 'PATCH',
        body: queryArg.appearanceDto,
      }),
    }),
    authenticationControllerLogin: build.mutation<
      AuthenticationControllerLoginApiResponse,
      AuthenticationControllerLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/api/login`,
        method: 'POST',
        body: queryArg.loginDto,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as rtk };
export type AppControllerGetOpenApiApiResponse = unknown;
export type AppControllerGetOpenApiApiArg = void;
export type UsersControllerCreateApiResponse = /** status 200  */ UserEntity;
export type UsersControllerCreateApiArg = {
  createUserDto: CreateUserDto;
};
export type UsersControllerFindAllApiResponse = /** status 200  */ UserEntity[];
export type UsersControllerFindAllApiArg = void;
export type UsersControllerFindOneApiResponse = /** status 200  */ UserEntity;
export type UsersControllerFindOneApiArg = {
  email: string;
};
export type UsersControllerUpdateApiResponse = /** status 200  */ UserEntity;
export type UsersControllerUpdateApiArg = {
  id: string;
  updateUserDto: UpdateUserDto;
};
export type UsersControllerRemoveApiResponse = unknown;
export type UsersControllerRemoveApiArg = {
  id: string;
};
export type ProjectControllerCreateApiResponse =
  /** status 200  */ ProjectEntity;
export type ProjectControllerCreateApiArg = {
  createProjectDto: CreateProjectDto;
};
export type ProjectControllerFindAllApiResponse =
  /** status 200  */ ProjectEntity[];
export type ProjectControllerFindAllApiArg = void;
export type ProjectControllerFindOneApiResponse =
  /** status 200  */ ProjectEntity;
export type ProjectControllerFindOneApiArg = {
  id: string;
};
export type ProjectControllerUpdateApiResponse =
  /** status 200  */ ProjectEntity;
export type ProjectControllerUpdateApiArg = {
  id: string;
  updateProjectDto: UpdateProjectDto;
};
export type ProjectControllerRemoveApiResponse = unknown;
export type ProjectControllerRemoveApiArg = {
  id: string;
};
export type ProjectControllerUpdateAppearanceApiResponse =
  /** status 200  */ ProjectEntity;
export type ProjectControllerUpdateAppearanceApiArg = {
  id: number;
  appearanceDto: AppearanceDto;
};
export type AuthenticationControllerLoginApiResponse =
  /** status 200  */ UserEntity;
export type AuthenticationControllerLoginApiArg = {
  loginDto: LoginDto;
};
export type UserEntity = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: 'admin' | 'principal' | 'teacher' | 'pedagogy';
  fullname: string;
};
export type CreateUserDto = {
  firstName: string;
  password: string;
  lastName: string;
  email: string;
  role: 'admin' | 'principal' | 'teacher' | 'pedagogy';
};
export type UpdateUserDto = {
  firstName: string;
  lastName: string;
  email: string;
};
export type AppearanceDto = {
  primaryColour: string;
  secondaryColour: string;
  logo: string;
};
export type ProjectEntity = {
  id: number;
  name: string;
  owner: UserEntity;
  address: string;
  appearance: AppearanceDto;
};
export type CreateProjectDto = {
  name: string;
  address: string;
  principal: CreateUserDto;
  appearane: AppearanceDto;
};
export type UpdateProjectDto = {
  address: string;
};
export type LoginDto = {
  username: string;
  password: string;
};
export const {
  useAppControllerGetOpenApiQuery,
  useUsersControllerCreateMutation,
  useUsersControllerFindAllQuery,
  useUsersControllerFindOneQuery,
  useUsersControllerUpdateMutation,
  useUsersControllerRemoveMutation,
  useProjectControllerCreateMutation,
  useProjectControllerFindAllQuery,
  useProjectControllerFindOneQuery,
  useProjectControllerUpdateMutation,
  useProjectControllerRemoveMutation,
  useProjectControllerUpdateAppearanceMutation,
  useAuthenticationControllerLoginMutation,
} = injectedRtkApi;
