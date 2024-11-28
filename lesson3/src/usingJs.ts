import {find} from 'underscore'
import React from 'react';
var even = find([1, 2, 3, 4, 5, 6], function(num: number){ return num % 2 == 0; });

