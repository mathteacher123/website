# Cookie Consent Management Spec

## ADDED Requirements

### Requirement: Display Cookie Consent Banner

The website SHALL display a cookie consent banner on all pages upon first visit, informing users about cookie usage and providing options to accept or reject tracking cookies.

#### Scenario: First-time visitor sees banner

- **WHEN** a user visits any page for the first time
- **THEN** a cookie consent banner appears at the bottom/top of the screen
- **AND** it explains the use of necessary and analytics cookies
- **AND** provides buttons to accept all, reject all, or customize preferences

### Requirement: Block Tracking Scripts by Default

Analytics scripts (Google Analytics, Splitbee) SHALL be blocked until user provides consent for analytics cookies.

#### Scenario: Scripts blocked without consent

- **WHEN** a user has not given consent
- **AND** the page loads
- **THEN** Google Analytics and Splitbee scripts do not execute
- **AND** no tracking data is sent

### Requirement: Load Scripts After Consent

Once user consents to analytics cookies, the tracking scripts SHALL load and begin collecting data.

#### Scenario: Scripts load after consent

- **WHEN** a user accepts analytics cookies
- **AND** the consent is saved
- **THEN** Google Analytics and Splitbee scripts load dynamically
- **AND** tracking begins from that point

### Requirement: Persist Consent Choice

User's consent choice SHALL be stored and remembered across sessions and page reloads.

#### Scenario: Consent persists

- **WHEN** a user accepts cookies
- **AND** they reload the page or return later
- **THEN** the banner does not reappear
- **AND** scripts load automatically if analytics consent was given

### Requirement: Configurable Consent Categories

The consent system SHALL support at least "necessary" (always allowed) and "analytics" categories.

#### Scenario: Category-based blocking

- **WHEN** the system has necessary and analytics categories
- **AND** user rejects analytics
- **THEN** necessary cookies/scripts work
- **BUT** analytics are blocked
