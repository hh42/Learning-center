package main

import (
	"fmt"
	"math/rand"
	"time"	
) 

func main() {

	rand.Seed(time.Now().Unix())
	// dow := rand.Intn(6) + 1
	// fmt.Println("Day", dow)
	result := ""
	
	// local variable dow
	switch dow := rand.Intn(6) + 1; dow {
		case 1: 
			result = "It's Sunday!"
		case 7: 
			result = "It's Saturday!"
		default: 
			result = "It's a weekday!"
	}
	fmt.Println(result)
	
	x := -42;
	switch {
		case x < 0:
			result = "Less than zero"
			// fallthrough : continue after encounter correct value
//			fallthrough
		case x == 0:
			result = "Equal to zero"
		default:
			result = "Greater than zero"
	}
	fmt.Println(result)

}
