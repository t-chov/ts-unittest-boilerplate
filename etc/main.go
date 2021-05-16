package main

import (
	"encoding/json"
	"net/http"
)

type Message struct {
	Message string `json:"message"`
}

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		msg := Message{Message: "PONG"}
		w.Header().Add("Content-Type", "application/json")
		json.NewEncoder(w).Encode(msg)
	})

	http.ListenAndServe(":3800", nil)
}
