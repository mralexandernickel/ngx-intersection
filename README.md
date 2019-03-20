[![Build Status](https://travis-ci.org/mralexandernickel/angular-intersection.svg?branch=master)](https://travis-ci.org/mralexandernickel/angular-intersection)
[![Coverage Status](https://coveralls.io/repos/github/mralexandernickel/angular-intersection/badge.svg?branch=master)](https://coveralls.io/github/mralexandernickel/angular-intersection?branch=master)
[![npm version](https://badge.fury.io/js/%40mralexandernickel%2Fangular-intersection.svg)](https://www.npmjs.com/@mralexandernickel/angular-intersection)

# Angular Intersection

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

## Events

- before start ("200px", 0.0)
- start ("0px", 0.0)
- after start ("-200px", 0.0)
- before end ("200px", 1.0)
- end ("0px", 1.0)
- after end ("-200px", 1.0)

## InjectionTokens

To be able to configure the behavior of the underlying IntersectionObservers,
we are providing 3 different InjectionTokens. With these you can set the
rootMargin of the IntersectionObserver-Services.

Available InjectionTokens are

- `ROOT_MARGIN_PAST`
- `ROOT_MARGIN_PRESENT`
- `ROOT_MARGIN_FUTURE`

To override one (or more) rootMargins, you can simply define the provider
inside your NgModule:

```typescript
import { ROOT_MARGIN_FUTURE } from '@mralexandernickel/angular-intersection';

@NgModule({
  // ...
  providers: [
    {
      provide: ROOT_MARGIN_FUTURE,
      useValue: '120px'
    }
  ]
})
```

Allowed Values are everything that is also allowed as CSS margin property.

More Information can be found on MDN:
[IntersectionObserver Docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
