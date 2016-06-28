package main

import (
	"fmt"
	"sort"
)

/* Slices are resizable which is not the case of array */
func main() {
	// [] : slice , [5] : array
	var colors = []string{"Red", "Green", "Blue"}
	fmt.Println(colors)
	
	// add content
	colors = append(colors, "Purple")
	fmt.Println(colors)
	
	// remove the first item
	colors = append(colors[1:len(colors)])
	fmt.Println(colors)
	
	// remove last item
	colors = append(colors[:len(colors)-1])
	fmt.Println(colors)
	
	// slice of int, initial size, and capacity
	numbers := make([]int, 5, 5)
	numbers[0] = 134
	numbers[1] = 72
	numbers[2] = 32
	numbers[3] = 12
	numbers[4] = 156
	fmt.Println(numbers)
	
	// exceeds slice size result on capacity change
	// more than a single one added, in case more are needed later
	numbers = append(numbers, 235)
	fmt.Println(numbers)
	fmt.Println(cap(numbers))

	// sort slice
	sort.Ints(numbers)
	fmt.Println(numbers)
	
}