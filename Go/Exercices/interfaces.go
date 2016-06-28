package main

import "fmt"

// Every value in go is an instance of the type
// and every type implement at least one interface 

// if a type implement all method of interface (no implement keyword)
// then type is an implementation of that interface

type Animal interface {
	Speak() string
}

type Dog struct {
}

// custom type Dog is now an implementation of Animal
func (d Dog) Speak() string {
	return "Woof!"
}

type Cat struct {
}

func (c Cat) Speak() string {
	return "Meow!"
}

type Cow struct {
}

func (c Cow) Speak() string {
	return "Moo!"
}

type Tree struct {
	
}

func main() {
	// cast Dog as Animal
	// since tjere'sno method overload in Go
	// Dog can't missmatch Animal, it must implement Speak like Animal
	poodle := Animal(Dog{})
	fmt.Println(poodle)
	
	animals := []Animal{Dog{}, Cat{}, Cow{}}
	// _ : throwaway value, can be assigned or declared with any value of any type
	// new for syntax
	for _, animal := range animals {
		fmt.Println(animal.Speak())
	}
}
