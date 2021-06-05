export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  DateTime: string;
  JSON: Record<string, unknown>;
  JSONObject: Record<string, unknown>;
  Time: string;
};



export type Framework = {
  __typename?: 'Framework';
  id: Scalars['Int'];
  name: Scalars['String'];
  claps: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};



export type Mutation = {
  __typename?: 'Mutation';
  clapFramework?: Maybe<Framework>;
};


export type MutationClapFrameworkArgs = {
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  framework?: Maybe<Framework>;
  frameworks: Array<Framework>;
  redwood?: Maybe<Redwood>;
};


export type QueryFrameworkArgs = {
  id: Scalars['Int'];
};

export type Redwood = {
  __typename?: 'Redwood';
  version?: Maybe<Scalars['String']>;
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
};


export type FrameworksQueryVariables = Exact<{ [key: string]: never; }>;


export type FrameworksQuery = (
  { __typename?: 'Query' }
  & { frameworks: Array<(
    { __typename?: 'Framework' }
    & Pick<Framework, 'id' | 'name' | 'claps'>
  )> }
);

export type ClapFrameworkVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ClapFramework = (
  { __typename?: 'Mutation' }
  & { clapFramework?: Maybe<(
    { __typename?: 'Framework' }
    & Pick<Framework, 'id' | 'claps'>
  )> }
);
