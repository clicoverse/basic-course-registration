//Question - 1: Add at least 3 project features

By using this project the customer/buyer can use these 3 main features:

1. The customer/buyer can purchase only one course at a time, So no duplicate item should not be in the cart.
2. The customer/buyer can calculate total amount of money is in the cart.
3. The customer/buyer can calculate total amount of time is required to complete the course.

// Question - 2: Discuss how you managed the state in your assignment.

In our project of Course Registration, Managing state is a crucial aspect of building dynamic and interactive web applications. React helps us in various way to handle state efficiently. Here are few examples:

To manage local components, we can use state object. First of all we need to import 'state' object by using "useState" hook and the function is looked like

import { useState } from "react";

It could be various types, such as

Number
Array
boolean
String etc.

We are using in this project all these types of state objects.

To declear this state the format is as below:

const [declearedState, setDeclearedState] = useState(dataType);
