package main

import "fmt"

// one of the defer usage is the disconnection of database connection
// only after all other task are finished

var isConnected bool = false

func main() {
	fmt.Printf("Connection open: %v\n", isConnected)
	doSomething()
	fmt.Printf("Connection open: %v\n", isConnected)
}

func doSomething() {
	connect()
	fmt.Println("Deferring disconnect!")
	defer disconnect()
	fmt.Printf("Connection open: %v\n", isConnected)
	fmt.Println("Doing something!")
}

func connect() {
	isConnected = true
	fmt.Println("Connected to database!")
}

func disconnect() {
	isConnected = false
	fmt.Println("Disconnected!")
}
