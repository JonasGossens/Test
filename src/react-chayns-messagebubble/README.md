# MessageBubble-Component #

The MessageBubble-Component renders a Message in a bubble with a few informations about the message. 
It's designed for use in communication applications.

## Usage ##

At first the component has to be imported:

```jsx harmony
import { MessageBubble } from 'chayns-components';
```

Then it can be used like in the following:

```jsx harmony
<MessageBubble>
    How are you?
</MessageBubble>
```

## Props ##

The following properties can be set

| Property     | Description                                                            | Type                       | Default Value |
|--------------|------------------------------------------------------------------------|----------------------------|---------------|
| children     | React components that should be displayed in the Message body          | node                       | *required*    |

## Examples ##

You can take a look at the **examples** folder in the **react-chayns-messagebubble** repository. There you can find an appropriate way of implementing the Component to your chayns-Tapp.
