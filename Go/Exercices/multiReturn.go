package main

import "fmt"

func main() {

	n1, l1 := FullName("Zaphod", "Beeblebrox")
	fmt.Printf("Fullname: %v, number of chars: %v\n\n", n1, l1)

	n2, l2 := FullNameNakedReturn("Arthur", "Dent")
	fmt.Printf("Fullname: %v, number of chars: %v\n\n", n2, l2)

}

// returned values must be in the same order of declarations
func FullName(f, l string) (string, int) {
	full := f + " " + l
	length := len(full)
	return full, length
}

// NakedReturn : not mentionning what variable is returned
func FullNameNakedReturn(f, l string) (full string, length int) {
	full = f + " " + l
	length = len(full)
	return 
}
