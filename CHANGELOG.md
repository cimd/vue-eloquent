# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.8.1]
### Added
- `ApiQuery.limit(n)`: static and instance helper that sends `limit=n` to cap the number of records returned
### Changed
- `Api.first()` now sends `limit=1` so only one record is requested (it overrides a previous `limit()`)
### Fixed

## [1.8.0]
### Added
- `Api.first()`: static and instance helper that resolves with the first record of the list (`data` is `null` when the list is empty); it respects the query builder state
- `ApiQuery.latest(column)`: static and instance helper that sorts by the given column in descending order; it appends to the current sorting (`sort()` replaces it)
### Changed
### Fixed

## [1.7.0]
### Added
### Changed
- Unused parameters of the empty lifecycle hooks are now prefixed with an underscore (e.g. `created(_payload)`); overrides are unaffected
- Bumped dependencies
- `EloquentError` (and `ApiError`, `ModelError`, `CollectionError`) now set the original error as `cause`, keep their own stack trace, and have a fixed `name` that survives minification
### Fixed
- `EloquentError` no longer throws a `TypeError` when it is created without an error, or with something other than an `Error`
- `IAxiosError.response` is now optional: it is not set on network errors and timeouts
- `Model.save()` no longer wraps the `ModelError` thrown by `create()` and `update()` again (and mislabelled it `Find`): `error.error` is the `ApiError`
- `hasOne` and `hasMany` request errors are labelled by the request (`Get`, `Show`, `Store`, `Update`, `Destroy`) instead of always `Store`

## [1.6.0]
### Added
- `Api.send()`: static helper to call custom endpoints (`send(method, path, data?, params?)`); `path` is the full URL, used as given
- `Api.url()`: static helper that builds `{apiPrefix}/{resource}/{...path}`, for use with `send()`
### Changed
### Fixed

## [1.4.10]
### Added
### Changed
### Fixed
- Failed build from previous version

## [1.4.9]
### Added
### Changed
### Fixed
- Failed build from previous version

## [1.4.7]
### Added
### Changed
- Modified id type for show API method: number | string
### Fixed
- transformResponse can handle null response

## [1.4.5]
### Added
- Tests
### Changed
- Removed unused dependencies
### Fixed
- Types

## [1.4.4]
### Added
### Changed
### Fixed
- build

## [1.4.3]
### Added
### Changed
### Fixed
- Types Exports

## [1.4.2]
### Added
### Changed
### Fixed
- Types Exports

## [1.4.0]
### Added
### Changed
- Bumped dependencies
### Fixed
- ES and CJS builds
- Types Exports

## [1.3.1]
### Added
### Changed
- Bumped dependencies
- Removed Pinia Plugin
### Fixed

## [1.3.0]
### Added
- Auth Class
### Changed
- Bump
### Fixed

## [1.2.3]
### Added
- Tests
### Changed
- Bumped MSW
### Fixed
- Model extending Validators

## [1.2.2]
### Added
### Changed
- Policy methods
### Fixed
- Api and Model's hasOne and hasMany relationships

## [1.2.1]
### Added
- Tests
### Changed
### Fixed
- Api and Model's hasOne and hasMany relationships

## [1.2.0]
### Added
- new Policy methods
### Changed
- Bump versions
### Fixed
- NA

## [1.1.3]
### Added
### Changed
- Bump versions
### Fixed
- Types exports

## [1.1.2]
### Added
- retriving and retrived callbacks to Model's refresh method
### Changed
- Pagination api
### Fixed

## [1.1.0]
### Added
- New interfaces
- Policy class
- Bump dependencies
### Changed
- Removed Event exports
### Fixed
- Correctly exporting types

## [1.0.1]
### Added
- Model require
### Changed
### Fixed
- Model lazy load relationship array

## [1.0.0]
### Added
- Static methods to ApiQuery class
- Tests
- Pinia API Store
### Changed
- Removed batch methods from Model
### Fixed
- Validator's $valid response

## [0.9.2] - 2023-10-08
### Added
- Basic ACL class

### Changed
- Method types
- Added payload to Model observers
- Updated dependencies

## [0.9.1] - 2023-09-28

### Fixed
- Missing computed property from validator class

## [0.9.0] - 2023-09-28

### Added
- Vue DevTools Plugin
- Model generics
#### Collections
- Adding Fetching, Fetched, FetchingError methods
- Changing updateDataSource method ensure reactivity of data property

### Fixed
- Removed duplicate query params from Api class

## [0.8.4] - 2023-09-08

### Added

- Changelog (this file)
- Github actions caching
- Model generics
- Pusher mocking

### Fixed

- Listener tests

### Changed

- Mode's static find method now returns an instance of the Model

### Removed

- N/A
