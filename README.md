# Overview

Accordion component for Qodly apps.


## Properties

|Name	|Type	|Description	|
|---	|---	|---	|
|`Variant`	|String	|Accordion style. you can choose one of `Default`, `Contained`, `Filled`, `Separated`.	|
|`Multiple`	|Boolean	|If set to `true` you can open many accordion at the same time.	|
|`Transition`	|String	|If set to `None` no transition is applied. you can choose one of `Ease In Out`, `Ease In`, `Ease Out`, `Linear` or `None`.	|
|`Items`	|Accordion Item	|You will need this to set the accordion's item. it come with one item by default.	|

## Accordion Item
|Name	|Type	|Description	|
|---	|---	|---	|
|`Title`	|String	|The accordion Title. you only need it for properties.	|
|`Open Chevron`	|Icon	|The icon you will display when the accordion is collapsed. by defaul it's `fa-chevron-up`.	|
|`Close Chevron`	|Icon	|The icon you will display when the accordion is open. by defaul it's `fa-chevron-down`.	|

## Todo

  - Add Animations
  - Disabling items ? can we
  - Add documentation for custom styling
