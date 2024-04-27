/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SignoutImport } from './routes/signout'
import { Route as SignupIndexImport } from './routes/signup/index'
import { Route as LoginIndexImport } from './routes/login/index'
import { Route as EventoIndexImport } from './routes/evento/index'
import { Route as LoginForgotImport } from './routes/login/forgot'
import { Route as EventoIdImport } from './routes/evento/$id'
import { Route as ErrorCodnameImport } from './routes/error/$codname'

// Create/Update Routes

const SignoutRoute = SignoutImport.update({
  path: '/signout',
  getParentRoute: () => rootRoute,
} as any)

const SignupIndexRoute = SignupIndexImport.update({
  path: '/signup/',
  getParentRoute: () => rootRoute,
} as any)

const LoginIndexRoute = LoginIndexImport.update({
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any)

const EventoIndexRoute = EventoIndexImport.update({
  path: '/evento/',
  getParentRoute: () => rootRoute,
} as any)

const LoginForgotRoute = LoginForgotImport.update({
  path: '/login/forgot',
  getParentRoute: () => rootRoute,
} as any)

const EventoIdRoute = EventoIdImport.update({
  path: '/evento/$id',
  getParentRoute: () => rootRoute,
} as any)

const ErrorCodnameRoute = ErrorCodnameImport.update({
  path: '/error/$codname',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/signout': {
      preLoaderRoute: typeof SignoutImport
      parentRoute: typeof rootRoute
    }
    '/error/$codname': {
      preLoaderRoute: typeof ErrorCodnameImport
      parentRoute: typeof rootRoute
    }
    '/evento/$id': {
      preLoaderRoute: typeof EventoIdImport
      parentRoute: typeof rootRoute
    }
    '/login/forgot': {
      preLoaderRoute: typeof LoginForgotImport
      parentRoute: typeof rootRoute
    }
    '/evento/': {
      preLoaderRoute: typeof EventoIndexImport
      parentRoute: typeof rootRoute
    }
    '/login/': {
      preLoaderRoute: typeof LoginIndexImport
      parentRoute: typeof rootRoute
    }
    '/signup/': {
      preLoaderRoute: typeof SignupIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  SignoutRoute,
  ErrorCodnameRoute,
  EventoIdRoute,
  LoginForgotRoute,
  EventoIndexRoute,
  LoginIndexRoute,
  SignupIndexRoute,
])

/* prettier-ignore-end */
