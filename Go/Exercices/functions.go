package main

import "fmt"

// func fctName([param] [param type]) [returned value type] {}

func main() {
	doSomething()
	
	sum := addValues(23, 54)
	fmt.Println("Sum:", sum)
	
	sum = addAllValues(12, 54, 79)
	fmt.Println("New sum:", sum)
}

func doSomething() {
	fmt.Println("Doing something!")
}

// same type, only one declaration of type
func addValues(value1, value2 int) int {
	return value1 + value2
}

// abitrary number of argument of same type
func addAllValues(values ...int) int {
	sum := 0
	for i := range values {
		sum += values[i]
	}
	fmt.Printf("%T\n", values)
	return sum
}