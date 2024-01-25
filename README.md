# Overview

Accordion component for Qodly apps.
![image info](public/accordion.png)

## Properties

|Name	|Type	|Description	|
|---	|---	|---	|
|`Variant`	|String	|Accordion style. you can choose one of `Default`, `Contained`, `Filled`, `rounded`, `Separated`.	|
|`Multiple`	|Boolean	|If set to `true` you can open many accordion at the same time.	|
|`Transition`	|String	|Transition duration . you can choose one of `0 ms`, `75 ms`, `100 ms`, `150 ms`, `200 ms` , `300 ms`, `500 ms`, `700 ms`, `1000 ms`.	|
|`Items`	|Accordion Item	|You will need this to set the accordion's item. it come with one item by default.	|

## Accordion Item

|Name	|Type	|Description	|
|---	|---	|---	|
|`Title`	|String	|The accordion Title. you only need it for properties.	|
|`Open Chevron`	|Icon	|The icon you will display when the accordion is collapsed. by defaul it's `fa-chevron-up`.	|
|`Close Chevron`	|Icon	|The icon you will display when the accordion is open. by defaul it's `fa-chevron-down`.	|

## Todo

  - Disabling items ? can we
  - Add documentation for custom styling
