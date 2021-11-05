package main

import (
	"embed"

	helloworld "github.com/maldan/gam-app-soundman/internal/app/soundman"
)

//go:embed frontend/build/*
var frontFs embed.FS

func main() {
	helloworld.Start(frontFs) //
}
