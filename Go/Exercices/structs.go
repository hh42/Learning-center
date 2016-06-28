package main

import (
	"fmt"
)

// Struct definition
type Dog struct {
	Breed string
	Weight int
}

func main() {
	// store data
	poodle := Dog{"Poodle", 34}
	fmt.Println(poodle)
	fmt.Printf("%+v\n", poodle)
	fmt.Printf("Breed: %v\nWeight: %v", poodle.Breed, poodle.Weight)

}