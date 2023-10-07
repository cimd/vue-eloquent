# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Basic ACL class

### Changed
- Method types
- Added payload to Model observers

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
