package main

import (
	"fmt"
	"sort"
)

// new(): allocate but doesn't initialize memory 
// -> error if try to set a value 

// make(): allocate and initialize memory
// declarations without make() can case a panic (crash + errmsg)

func main() {
	// map : unordered key/value pairs collection in go
	// map[keytype]valuetype
	states := make(map[string]string)
	fmt.Println(states)
	
	// set values
	states["WA"] = "Washington"
	states["OR"] = "Oregon"
	states["CA"] = "California"
	fmt.Println(states)

	// get a value
	california := states["CA"]
	fmt.Println(california)
	
	// delete a value
	delete(states, "OR")
	fmt.Println(states)

	states["NY"] = "New York"
	
	// map itertion order is not guarrented
	// iterrate through map and asign k and v to current entry
	for k, v := range states {
		fmt.Printf("%v: %v\n", k, v)
	}
	
	// extract keys as slice to order
	keys := make([]string, len(states))
	i := 0
	// with a single variable, only get key
	for k := range states {
		keys[i] = k
		i++
	}
	// sort.strings like with preview sort.ints
	sort.Strings(keys)
	fmt.Println("\nSorted")
	for i := range keys {
		fmt.Println(states[keys[i]])
	}

}