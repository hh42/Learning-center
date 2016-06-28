package main

import (
	"fmt"
	"os"
	"errors"
)

func main() {
	f, err := os.Open("filename.ext")

	if err == nil {
		fmt.Println(f)
	} else {
		fmt.Println(err.Error())
	}
	
	// overide error method with 'errors' package
	myError := errors.New("My error string")
	fmt.Println(myError)

	// comma-ok syntax
	attendance := map[string]bool{
		"Ann": true,
		"Mike": true}
	// if key doesn't exist, ok = false
	// attended gets value of the key if found in map
	attended, ok := attendance["M"]
	if ok {
		fmt.Println("Mike attended?", attended)
	} else {
		fmt.Println("No info for Mike")
	}

}
