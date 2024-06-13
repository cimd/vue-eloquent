# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.1 - unreleased]
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
