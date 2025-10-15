/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";

type ContactConfirmationEmailProps = {
  fullName?: string | null;
  eventDate?: string | null;
  serviceType?: string | null;
};

const accentColor = "#ff2e8e";
const darkBackground = "#0f1015";
const cardBackground = "#181922";
const dividerColor = "rgba(255,255,255,0.08)";

const checkIconSrc = [
  "data:image/svg+xml;base64,",
  "PHN2ZyB3aWR0aD0iOTAiIGhlaWdodD0iOTAiIHZpZXdCb3g9IjAgMCA5MCA5MCIgZmlsbD0ibm9uZSIg",
  "eG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ1IDBDMjAuMTgyNyAw",
  "IDAgMjAuMTgyNyAwIDQ1QzAgNjkuODE3MyAyMC4xODI3IDkwIDQ1IDkwQzY5LjgxNzMgOTAgOTAgNjku",
  "ODE3MyA5MCA0NUM5MCAyMC4xODI3IDY5LjgxNzMgMCA0NSAwWk00NSA2QzY2LjU3NDYgNiA4NCAyMy40",
  "MjUzIDg0IDQ1Qzg0IDY2LjU3NDYgNjYuNTc0NiA4NCA0NSA4NEMyMy40MjU0IDg0IDYgNjYuNTc0NiA2",
  "IDQ1QzYgMjMuNDI1MyAyMy40MjU0IDYgNDUgNlpNNjYuOTA2MiAyNS45Njg4QzY2LjEyMjYgMjUuOTk5",
  "NyA2NS4zODIzIDI2LjMzNjIgNjQuODQzOCAyNi45MDYyTDM1Ljk2ODggNTYuNzE4OEwyNS4xMjUgNDUu",
  "ODc1QzI0Ljg1NTIgNDUuNTY2MSAyNC41MjUgNDUuMzE1NyAyNC4xNTQ3IDQ1LjEzOTRDMjMuNzg0NCA0",
  "NC45NjMxIDIzLjM4MTggNDQuODY0NiAyMi45NzE5IDQ0Ljg1QzIyLjU2MiA0NC44MzU0IDIyLjE1MzUg",
  "NDQuOTA1IDIxLjc3MTYgNDUuMDU0NEMyMS4zODk2IDQ1LjIwMzkgMjEuMDQyNCA0NS40MzAxIDIwLjc1",
  "MTMgNDUuNzE5QzIwLjQ2MDIgNDYuMDA4IDIwLjIzMTUgNDYuMzUzNSAyMC4wNzkyIDQ2LjczNDRDMTku",
  "OTI2OSA0Ny4xMTUyIDE5Ljg1NDMgNDcuNTIzMiAxOS44NjU5IDQ3LjkzMzJDMTkuODc3NSA0OC4zNDMy",
  "IDE5Ljk3MyA0OC43NDY0IDIwLjE0NjYgNDkuMTE4QzIwLjMyMDEgNDkuNDg5NiAyMC41NjgxIDQ5Ljgy",
  "MTcgMjAuODc1IDUwLjA5MzhMMzMuODc1IDYzLjA5MzhDMzQuMTU2MyA2My4zNzYxIDM0LjQ5MTEgNjMu",
  "NTk5NSAzNC44NTk4IDYzLjc1MTFDMzUuMjI4NSA2My45MDI2IDM1LjYyMzYgNjMuOTc5MSAzNi4wMjIy",
  "IDYzLjk3NjJDMzYuNDIwOCA2My45NzMzIDM2LjgxNDggNjMuODkxIDM3LjE4MTIgNjMuNzM0MUMzNy41",
  "NDc2IDYzLjU3NzIgMzcuODc5MSA2My4zNDg5IDM4LjE1NjIgNjMuMDYyNUw2OS4xNTYyIDMxLjA2MjVD",
  "NjkuNTc0NSAzMC42MzM4IDY5Ljg1NDkgMzAuMDg5NiA2OS45NjEzIDI5LjUwMDJDNzAuMDY3NyAyOC45",
  "MTA3IDY5Ljk5NTIgMjguMzAyOSA2OS43NTMyIDI3Ljc1NUM2OS41MTEyIDI3LjIwNzEgNjkuMTEwNyAy",
  "Ni43NDQyIDY4LjYwMzMgMjYuNDI1OEM2OC4wOTU5IDI2LjEwNzUgNjcuNTA0OSAyNS45NDgzIDY2Ljkw",
  "NjIgMjUuOTY4OFoiIGZpbGw9IiNGRjJFOEUiLz4KPC9zdmc+Cg==",
].join("");

const logoSrc = [
  "data:image/svg+xml;base64,",
  "PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSIxMDAwIiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBmaWxs",
  "PSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSI1MDAi",
  "IGN5PSI1MDAiIHI9IjUwMCIgZmlsbD0iYmxhY2siLz4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzIy",
  "MzJfNDc2KSI+CjxwYXRoIGQ9Ik0yMzYuNDI4IDc1Ni40MUwyNzAuMjI5IDgxMi41MDNMMjcwLjY2OCA4",
  "MTMuMjMxTDI3MS4wOTEgODEyLjQ5M0wzMDMuMjQ1IDc1Ni40MUgzMjEuOTcyVjc1Ny40ODRDMzE4Ljg2",
  "OCA3NTguNjMxIDMxNi41MjQgNzYwLjQ2NiAzMTQuOTY5IDc2NC4wNTlDMzEzLjM4IDc2Ny43MyAzMTIu",
  "NjI2IDc3My4yMTEgMzEyLjYyNiA3ODEuNjA0VjgzNC42NDJDMzEyLjYyNiA4MzkuNTg0IDMxMi44NjMg",
  "ODQzLjE2MyAzMTMuNjk4IDg0NS43MDRDMzE0LjEyIDg0Ni45ODUgMzE0LjY5OSA4NDguMDIzIDMxNS40",
  "OTEgODQ4Ljg0M0MzMTYuMjA4IDg0OS41ODQgMzE3LjA4IDg1MC4xMjYgMzE4LjEyMyA4NTAuNTE5Vjg1",
  "MS41OTFIMjkzLjU2Vjg1MC41MTlDMjk0LjYwMiA4NTAuMTI3IDI5NS40NzUgODQ5LjU4NCAyOTYuMTkx",
  "IDg0OC44NDNDMjk2Ljk4NCA4NDguMDIzIDI5Ny41NjMgODQ2Ljk4NSAyOTcuOTg0IDg0NS43MDRDMjk4",
  "LjgyIDg0My4xNjMgMjk5LjA1OCA4MzkuNTg0IDI5OS4wNTggODM0LjY0MlY3NjYuMjUzTDI5OC4xMjMg",
  "NzY3Ljg5MkwyNjUuMjgxIDgyNS40ODVIMjYyLjY5MkwyMjguMzQyIDc2OS4xMTVMMjI3LjQxNCA3Njcu",
  "NTk0VjgyNi4zOTdDMjI3LjQxNCA4MzQuNzkyIDIyOC4yMzYgODQwLjI4MSAyMzAuMDA2IDg0My45NjFD",
  "MjMxLjc0MSA4NDcuNTY5IDIzNC4zNjcgODQ5LjM5MyAyMzcuODU5IDg1MC41M1Y4NTEuNTkxSDIyMC40",
  "NDNWODUwLjUxOUMyMjEuNDg2IDg1MC4xMjYgMjIyLjM1OSA4NDkuNTg0IDIyMy4wNzUgODQ4Ljg0M0My",
  "MjMuODY3IDg0OC4wMjMgMjI0LjQ0NiA4NDYuOTg1IDIyNC44NjcgODQ1LjcwNEMyMjUuNzAzIDg0My4x",
  "NjMgMjI1Ljk0IDgzOS41ODQgMjI1Ljk0IDgzNC42NDJWNzgxLjYwNEMyMjUuOTQgNzczLjIxMSAyMjUu",
  "MTg3IDc2Ny43MyAyMjMuNTk4IDc2NC4wNTlDMjIyLjA0MyA3NjAuNDY2IDIxOS42OTggNzU4LjYzMSAy",
  "MTYuNTk1IDc1Ny40ODRWNzU2LjQxSDIzNi40MjhaIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSJ3aGl0ZSIv",
  "Pgo8cGF0aCBkPSJNMzk4LjY1NyA3ODMuNDkzVjgzNC42NDJDMzk4LjY1NyA4MzkuNTg0IDM5OC44OTUg",
  "ODQzLjE2MyAzOTkuNzMgODQ1LjcwNEM0MDAuMTUyIDg0Ni45ODUgNDAwLjczIDg0OC4wMjMgNDAxLjUy",
  "MiA4NDguODQzQzQwMi4yMzkgODQ5LjU4NCA0MDMuMTEyIDg1MC4xMjYgNDA0LjE1NCA4NTAuNTE5Vjg1",
  "MS41OTJIMzkwLjYzNkMzODguOTM2IDg1MS41OTIgMzg3LjcwNiA4NTEuMTM2IDM4Ni45IDg1MC4zM0Mz",
  "ODYuMDk1IDg0OS41MjUgMzg1LjYzOSA4NDguMjk1IDM4NS42MzkgODQ2LjU5NlY4MzkuMjM1TDM4NC43",
  "OTEgODQwLjA1M0MzNzYuOTkzIDg0Ny41NzUgMzY3LjYzIDg1Mi45NjYgMzU5LjE2MyA4NTIuOTY2QzM1",
  "MS45ODcgODUyLjk2NiAzNDcuMDAxIDg1MC43NzIgMzQzLjc4OCA4NDYuNkMzNDAuNTU0IDg0Mi40IDMz",
  "OS4wNDcgODM2LjEwOSAzMzkuMDQ3IDgyNy43NzFWODAzLjAzOUMzMzkuMDQ3IDc5OC45NjIgMzM4LjUz",
  "MyA3OTYuNDc3IDMzNy41MTQgNzk0LjgxQzMzNi41NDIgNzkzLjIyIDMzNS4xNSA3OTIuNDQzIDMzMy41",
  "NSA3OTEuNzI0Vjc5MC40NDlMMzUxLjExNSA3ODIuNzMzTDM1Mi4wNjYgNzgzLjQ5M1Y4MjUuOTg1QzM1",
  "Mi4wNjYgODMzLjMzMyAzNTIuNjQ0IDgzOC45NDMgMzU0LjYxMyA4NDIuNzIyQzM1NS42MDcgODQ0LjYy",
  "OCAzNTYuOTYgODQ2LjA3NyAzNTguNzY3IDg0Ny4wNDNDMzYwLjU2NyA4NDguMDA1IDM2Mi43ODUgODQ4",
  "LjQ3IDM2NS40ODUgODQ4LjQ3QzM3MS44NjYgODQ4LjQ3IDM3OC43MjEgODQ0LjY1IDM4NS40OTIgODM3",
  "Ljg4MUwzODUuNjM5IDgzNy43MzRWODAzLjAzOUMzODUuNjM5IDc5OC45NjIgMzg1LjEyNCA3OTYuNDc3",
  "IDM4NC4xMDQgNzk0LjgxQzM4My4xMzMgNzkzLjIyIDM4MS43NDEgNzkyLjQ0MyAzODAuMTQxIDc5MS43",
  "MjRWNzkwLjQ0OUwzOTcuNzA3IDc4Mi43MzNMMzk4LjY1NyA3ODMuNDkzWiIgZmlsbD0id2hpdGUiIHN0",
  "cm9rZT0id2hpdGUiLz4KPHBhdGggZD0iTTQ0Mi4zNTMgNzgyLjkzQzQ0OS45NzggNzgyLjkzIDQ1OC4x",
  "MDcgNzg0LjM3MyA0NjIuNzU4IDc4Ni4yMDlMNDYzLjQxIDgwMC41NThMNDYyLjU2NCA4MDAuNjk5QzQ1",
  "Ny44MDUgNzkxLjAwOCA0NDkuMjI1IDc4My44NTQgNDM5LjA1NSA3ODMuODU0QzQzMC4yNjIgNzgzLjg1",
  "NCA0MjQuMjYxIDc4OC40ODggNDI0LjI2MSA3OTQuNzk2QzQyNC4yNjEgNzk4LjgzNyA0MjYuMDg2IDgw",
  "MS43MjYgNDI5LjQ1NSA4MDQuMTAyQzQzMi43ODggODA2LjQ1MSA0MzcuNjY2IDgwOC4zMjUgNDQzLjg0",
  "NCA4MTAuMzg0QzQ0OS4zNzQgODEyLjI1IDQ1NS4wNjEgODEzLjk3OCA0NTkuMzg2IDgxNi45NjhDNDYz",
  "LjY2NSA4MTkuOTI2IDQ2Ni41OTIgODI0LjEwOSA0NjYuNTkyIDgzMC45MzNDNDY2LjU5MiA4MzYuMDUz",
  "IDQ2NC45NzQgODQxLjQ4MyA0NjAuOTQzIDg0NS42M0M0NTYuOTE4IDg0OS43NzEgNDUwLjQyOSA4NTIu",
  "NjkxIDQ0MC41NjYgODUyLjY5MUM0MzAuNzQ2IDg1Mi42OTEgNDIxLjQ3OCA4NDkuNzY2IDQxNi4zMDcg",
  "ODQ2LjQ0Nkw0MTQuOTg1IDgyOS4xMzdMNDE1LjUzNiA4MjkuMDI2QzQyMS41MDQgODQyLjExMSA0MzEu",
  "NDYyIDg1MS4zNTIgNDQzLjg1NiA4NTEuNDkyVjg1MS40OTNDNDUyLjYxIDg1MS42MzQgNDU4LjM4NCA4",
  "NDUuODIxIDQ1OC4zODQgODM5LjE3N0M0NTguMzg0IDgzNC42MSA0NTYuNTQ2IDgzMS40MDkgNDUzLjE4",
  "MyA4MjguOUM0NDkuODU5IDgyNi40MjEgNDQ1LjA0IDgyNC42MTUgNDM5LjA2NSA4MjIuNzYxTDQzOS4w",
  "NjIgODIyLjc2TDQzNy43MjYgODIyLjM0OUM0MzEuMTI2IDgyMC4yOTYgNDI1LjgzNSA4MTguMjk2IDQy",
  "Mi4xMjcgODE1LjQ1NkM0MTguMjE2IDgxMi40NjEgNDE2LjA1MyA4MDguNTIyIDQxNi4wNTMgODAyLjQ5",
  "QzQxNi4wNTMgNzk3LjQwNCA0MTguMDI0IDc5Mi41MzIgNDIyLjI2OCA3ODguOTI1QzQyNi41MTcgNzg1",
  "LjMxMyA0MzMuMDkgNzgyLjkzIDQ0Mi4zNTMgNzgyLjkzWiIgZmlsbD0id2hpdGUiIHN0cm9rZT0id2hp",
  "dGUiLz4KPHBhdGggZD0iTTQ5OC4yMzQgNzY1Ljc1NFY3ODMuODkxSDUxOS4zOTdMNTE5LjA5OCA3ODUu",
  "MDlINDk4LjIzNFY4MzIuODU1QzQ5OC4yMzQgODM3LjE2MSA0OTkuMDMgODQwLjM1IDUwMC42NzYgODQy",
  "LjQ3MUM1MDIuMzQyIDg0NC42MTcgNTA0LjgxIDg0NS41ODQgNTA3Ljk0MiA4NDUuNTg0QzUxMS4wMzcg",
  "ODQ1LjU4NCA1MTUuNjg5IDg0NC4zNDMgNTIwLjIxIDgzOC45NTZMNTIwLjg2NCA4MzkuNjFDNTEzLjcw",
  "MyA4NDcuNzc4IDUwNi45MDYgODUyLjk2NiA0OTkuMDEgODUyLjk2NkM0OTQuNDUzIDg1Mi45NjYgNDkx",
  "LjA1MSA4NTEuNTMzIDQ4OC43NjQgODQ4LjM2NEM0ODYuNDUgODQ1LjE2IDQ4NS4yMTYgODQwLjEgNDg1",
  "LjIxNiA4MzIuNzE4Vjc4NS4wOUg0NzYuNDJWNzgzLjYxNkw0OTYuNzI1IDc2NS43NTRINDk4LjIzNFoi",
  "IGZpbGw9IndoaXRlIiBzdHJva2U9IndoaXRlIi8+CjxwYXRoIGQ9Ik01NDUuNzkyIDc1Ni40MUw1Nzku",
  "NTk0IDgxMi41MDNMNTgwLjAzMiA4MTMuMjMxTDU4MC40NTUgODEyLjQ5M0w2MTIuNjA5IDc1Ni40MUg2",
  "MzEuMzM2Vjc1Ny40ODRDNjI4LjIzMyA3NTguNjMxIDYyNS44ODggNzYwLjQ2NiA2MjQuMzMzIDc2NC4w",
  "NTlDNjIyLjc0NCA3NjcuNzMgNjIxLjk5IDc3My4yMTEgNjIxLjk5IDc4MS42MDRWODM0LjY0MkM2MjEu",
  "OTkgODM5LjU4NCA2MjIuMjI3IDg0My4xNjMgNjIzLjA2MiA4NDUuNzA0QzYyMy40ODQgODQ2Ljk4NSA2",
  "MjQuMDYzIDg0OC4wMjMgNjI0Ljg1NSA4NDguODQzQzYyNS41NzIgODQ5LjU4NCA2MjYuNDQ1IDg1MC4x",
  "MjYgNjI3LjQ4NyA4NTAuNTE5Vjg1MS41OTFINjAyLjkyNFY4NTAuNTE5QzYwMy45NjcgODUwLjEyNyA2",
  "MDQuODM5IDg0OS41ODQgNjA1LjU1NiA4NDguODQzQzYwNi4zNDggODQ4LjAyMyA2MDYuOTI3IDg0Ni45",
  "ODUgNjA3LjM0OSA4NDUuNzA0QzYwOC4xODQgODQzLjE2MyA2MDguNDIyIDgzOS41ODQgNjA4LjQyMiA4",
  "MzQuNjQyVjc2Ni4yNTNMNjA3LjQ4NyA3NjcuODkyTDU3NC42NDYgODI1LjQ4NUg1NzIuMDU3TDUzNy43",
  "MDYgNzY5LjExNUw1MzYuNzc4IDc2Ny41OTRWODI2LjM5N0M1MzYuNzc4IDgzNC43OTIgNTM3LjYwMSA4",
  "NDAuMjgxIDUzOS4zNyA4NDMuOTYxQzU0MS4xMDUgODQ3LjU2OSA1NDMuNzMxIDg0OS4zOTMgNTQ3LjIy",
  "NCA4NTAuNTNWODUxLjU5MUg1MjkuODA4Vjg1MC41MTlDNTMwLjg1IDg1MC4xMjYgNTMxLjcyMyA4NDku",
  "NTg0IDUzMi40MzkgODQ4Ljg0M0M1MzMuMjMyIDg0OC4wMjMgNTMzLjgxIDg0Ni45ODUgNTM0LjIzMSA4",
  "NDUuNzA0QzUzNS4wNjcgODQzLjE2MyA1MzUuMzA1IDgzOS41ODQgNTM1LjMwNSA4MzQuNjQyVjc4MS42",
  "MDRDNTM1LjMwNSA3NzMuMjExIDUzNC41NTEgNzY3LjczIDUzMi45NjIgNzY0LjA1OUM1MzEuNDA3IDc2",
  "MC40NjYgNTI5LjA2MiA3NTguNjMxIDUyNS45NTkgNzU3LjQ4NFY3NTYuNDFINTQ1Ljc5MloiIGZpbGw9",
  "IndoaXRlIiBzdHJva2U9IndoaXRlIi8+CjxwYXRoIGQ9Ik03MDguMDIxIDc4My40OTNWODM0LjY0MkM3",
  "MDguMDIxIDgzOS41ODQgNzA4LjI1OSA4NDMuMTYzIDcwOS4wOTUgODQ1LjcwNEM3MDkuNTE2IDg0Ni45",
  "ODUgNzEwLjA5NSA4NDguMDIzIDcxMC44ODcgODQ4Ljg0M0M3MTEuNjAzIDg0OS41ODQgNzEyLjQ3NiA4",
  "NTAuMTI2IDcxMy41MTkgODUwLjUxOVY4NTEuNTkySDcwMEM2OTguMyA4NTEuNTkyIDY5Ny4wNyA4NTEu",
  "MTM2IDY5Ni4yNjUgODUwLjMzQzY5NS40NTkgODQ5LjUyNSA2OTUuMDAzIDg0OC4yOTUgNjk1LjAwMyA4",
  "NDYuNTk2VjgzOS4yMzVMNjk0LjE1NSA4NDAuMDUzQzY4Ni4zNTggODQ3LjU3NSA2NzYuOTk0IDg1Mi45",
  "NjYgNjY4LjUyNyA4NTIuOTY2QzY2MS4zNTEgODUyLjk2NiA2NTYuMzY1IDg1MC43NzIgNjUzLjE1MiA4",
  "NDYuNkM2NDkuOTE5IDg0Mi40IDY0OC40MTEgODM2LjEwOSA2NDguNDExIDgyNy43NzFWODAzLjAzOUM2",
  "NDguNDExIDc5OC45NjIgNjQ3Ljg5NyA3OTYuNDc3IDY0Ni44NzggNzk0LjgxQzY0NS45MDYgNzkzLjIy",
  "IDY0NC41MTUgNzkyLjQ0MyA2NDIuOTE0IDc5MS43MjRWNzkwLjQ0OUw2NjAuNDc5IDc4Mi43MzNMNjYx",
  "LjQzMSA3ODMuNDkzVjgyNS45ODVDNjYxLjQzMSA4MzMuMzMzIDY2Mi4wMDggODM4Ljk0MyA2NjMuOTc4",
  "IDg0Mi43MjJDNjY0Ljk3MSA4NDQuNjI4IDY2Ni4zMjQgODQ2LjA3NyA2NjguMTMxIDg0Ny4wNDNDNjY5",
  "LjkzMSA4NDguMDA1IDY3Mi4xNDkgODQ4LjQ3IDY3NC44NSA4NDguNDdDNjgxLjIzIDg0OC40NyA2ODgu",
  "MDg1IDg0NC42NSA2OTQuODU2IDgzNy44ODFMNjk1LjAwMyA4MzcuNzM0VjgwMy4wMzlDNjk1LjAwMyA3",
  "OTguOTYyIDY5NC40ODggNzk2LjQ3NyA2OTMuNDY5IDc5NC44MUM2OTIuNDk3IDc5My4yMiA2OTEuMTA2",
  "IDc5Mi40NDMgNjg5LjUwNSA3OTEuNzI0Vjc5MC40NDlMNzA3LjA3MSA3ODIuNzMzTDcwOC4wMjEgNzgz",
  "LjQ5M1oiIGZpbGw9IndoaXRlIiBzdHJva2U9IndoaXRlIi8+CjxwYXRoIGQ9Ik03NDIuNjk0IDc0Mi4y",
  "NzJWODM0LjY0MkM3NDIuNjk0IDgzOS41ODQgNzQyLjkzMSA4NDMuMTYzIDc0My43NjcgODQ1LjcwNEM3",
  "NDQuMTg4IDg0Ni45ODYgNzQ0Ljc2NyA4NDguMDIzIDc0NS41NiA4NDguODQzQzc0Ni4yNzYgODQ5LjU4",
  "NCA3NDcuMTQ5IDg1MC4xMjYgNzQ4LjE5MSA4NTAuNTE5Vjg1MS41OTJINzI0LjE3OFY4NTAuNTE5Qzcy",
  "NS4yMjEgODUwLjEyNiA3MjYuMDkzIDg0OS41ODQgNzI2LjgxIDg0OC44NDNDNzI3LjYwMiA4NDguMDIz",
  "IDcyOC4xODEgODQ2Ljk4NiA3MjguNjAzIDg0NS43MDRDNzI5LjQzOCA4NDMuMTYzIDcyOS42NzUgODM5",
  "LjU4NCA3MjkuNjc1IDgzNC42NDJWNzYxLjgxOEM3MjkuNjc1IDc1Ny43NDIgNzI5LjE2MSA3NTUuMjU2",
  "IDcyOC4xNDIgNzUzLjU4OUM3MjcuMTcgNzUxLjk5OSA3MjUuNzc4IDc1MS4yMjIgNzI0LjE3OCA3NTAu",
  "NTAzVjc0OS4yMjlMNzQxLjc0MyA3NDEuNTEzTDc0Mi42OTQgNzQyLjI3MloiIGZpbGw9IndoaXRlIiBz",
  "dHJva2U9IndoaXRlIi8+CjxwYXRoIGQ9Ik03NzcuODkyIDc0Mi4yNzJWODM0LjY0MkM3NzcuODkyIDgz",
  "OS41ODQgNzc4LjEyOCA4NDMuMTYzIDc3OC45NjQgODQ1LjcwNEM3NzkuMzg1IDg0Ni45ODYgNzc5Ljk2",
  "NSA4NDguMDIzIDc4MC43NTcgODQ4Ljg0M0M3ODEuNDczIDg0OS41ODQgNzgyLjM0NiA4NTAuMTI2IDc4",
  "My4zODkgODUwLjUxOVY4NTEuNTkySDc1OS4zNzVWODUwLjUxOUM3NjAuNDE4IDg1MC4xMjYgNzYxLjI5",
  "IDg0OS41ODQgNzYyLjAwNyA4NDguODQzQzc2Mi43OTkgODQ4LjAyMyA3NjMuMzc4IDg0Ni45ODYgNzYz",
  "LjggODQ1LjcwNEM3NjQuNjM1IDg0My4xNjMgNzY0Ljg3MiA4MzkuNTg0IDc2NC44NzIgODM0LjY0MlY3",
  "NjEuODE4Qzc2NC44NzIgNzU3Ljc0MiA3NjQuMzU4IDc1NS4yNTYgNzYzLjMzOSA3NTMuNTg5Qzc2Mi4z",
  "NjcgNzUxLjk5OSA3NjAuOTc2IDc1MS4yMjIgNzU5LjM3NSA3NTAuNTAzVjc0OS4yMjlMNzc2Ljk0IDc0",
  "MS41MTNMNzc3Ljg5MiA3NDIuMjcyWiIgZmlsbD0id2hpdGUiIHN0cm9rZT0id2hpdGUiLz4KPHBhdGgg",
  "ZD0iTTUwMC4yOSAxNDYuNUM1NjYuNjY5IDE0Ni40NjIgNjMxLjgxIDE2NC40NzMgNjg4LjczNiAxOTgu",
  "NjA0Qzc0NS42NjUgMjMyLjczNCA3OTIuMjM3IDI4MS43IDgyMy40NjUgMzQwLjI2Qzg1NC42OTUgMzk4",
  "LjgxOCA4NjkuNDA3IDQ2NC43NjcgODY2LjAyNSA1MzEuMDQzQzg2Mi43MDUgNTk2LjExMyA4NDIuMDY4",
  "IDY1OS4wOTQgODA2LjI3NiA3MTMuNDkxSDgwNi4yNzVDODA1LjM2IDcxNC44ODMgODAzLjUwOSA3MTUu",
  "Mjg4IDgwMi4wOSA3MTQuNDM1TDgwMS45NTQgNzE0LjM0OEM4MDAuNTY3IDcxMy40MTYgODAwLjE2NSA3",
  "MTEuNTY0IDgwMS4wMDYgNzEwLjEzM0w4MDEuMDkxIDcwOS45OTVDODM2LjI0NyA2NTYuNTQgODU2LjUx",
  "OSA1OTQuNjU4IDg1OS43OCA1MzAuNzI0Qzg2My4xMDQgNDY1LjU4MSA4NDguNjQzIDQwMC43NTkgODE3",
  "Ljk0OCAzNDMuMTk5Qzc4Ny4yNTEgMjg1LjY0MSA3NDEuNDc2IDIzNy41MTEgNjg1LjUyMSAyMDMuOTY0",
  "QzYyOS41NjcgMTcwLjQxNiA1NjUuNTM5IDE1Mi43MTQgNTAwLjI5NCAxNTIuNzUxQzQzNS4wNDggMTUy",
  "Ljc4OCAzNzEuMDQxIDE3MC41NjUgMzE1LjEyNSAyMDQuMTc3QzI1OS4yMDkgMjM3Ljc4OSAyMTMuNDg4",
  "IDI4NS45NzEgMTgyLjg1OCAzNDMuNTY0QzE1Mi4yMjkgNDAxLjE1OCAxMzcuODQzIDQ2NS45OTcgMTQx",
  "LjI0MSA1MzEuMTM2QzE0NC41NzYgNTk1LjA2NyAxNjQuOTE4IDY1Ni45MjcgMjAwLjEzNiA3MTAuMzQy",
  "VjcxMC4zNDFDMjAxLjA4OSA3MTEuNzg2IDIwMC43MDkgNzEzLjczIDE5OS4yNzggNzE0LjY5M0gxOTku",
  "Mjc3QzE5Ny44NDQgNzE1LjY2IDE5NS45MDMgNzE1LjI3OSAxOTQuOTU1IDcxMy44NDJDMTU5LjEwMSA2",
  "NTkuNDg2IDEzOC4zOTEgNTk2LjUyOCAxMzQuOTk3IDUzMS40NjJDMTMxLjU0IDQ2NS4xOSAxNDYuMTc1",
  "IDM5OS4yMjYgMTc3LjMzNyAzNDAuNjNDMjA4LjQ5OSAyODIuMDM1IDI1NS4wMTQgMjMzLjAxNiAzMTEu",
  "OTAyIDE5OC44MTlDMzY4Ljc5MSAxNjQuNjIzIDQzMy45MTEgMTQ2LjUzOCA1MDAuMjkgMTQ2LjVaIiBm",
  "aWxsPSJ3aGl0ZSIgc3Ryb2tlPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNTcxLjc0NSAzOTAuOTM2QzU5Ni40",
  "MzYgMzk0Ljg4OCA1OTUuNDQ3IDQxNS42MjYgNTk1LjQ0NyA0MTUuNjI2TTQ1MC4yMzkgNDY4Ljk1M0M0",
  "ODcuNzggNDc0Ljg3NSA0ODUuNTY0IDUwNS40MDEgNDg1LjU2NCA1MDUuNDAxTTUxMC40OTcgNzAxLjAy",
  "MUM1MTAuNDk3IDcwOC4xMSA1MDQuNzQ4IDcxMy44NTggNDk3LjY1NiA3MTMuODU4QzQ5MC41NjMgNzEz",
  "Ljg1OCA0ODQuODE0IDcwOC4xMSA0ODQuODE0IDcwMS4wMjFDNDg0LjgxNCA2OTMuOTMxIDQ5MC41NjMg",
  "Njg4LjE4MyA0OTcuNjU2IDY4OC4xODNDNTA0Ljc0OCA2ODguMTgzIDUxMC40OTcgNjkzLjkzMSA1MTAu",
  "NDk3IDcwMS4wMjFaTTQ5Mi43MTYgNjQ5LjY2OUM0OTIuNzE2IDY1OC45MzkgNDg1LjE5NyA2NjYuNDU3",
  "IDQ3NS45MjQgNjY2LjQ1N0M0NjYuNjQ5IDY2Ni40NTcgNDU5LjEzIDY1OC45MzkgNDU5LjEzIDY0OS42",
  "NjlDNDU5LjEzIDY0MC4zOTYgNDY2LjY0OSA2MzIuODgxIDQ3NS45MjQgNjMyLjg4MUM0ODUuMTk3IDYz",
  "Mi44ODEgNDkyLjcxNiA2NDAuMzk2IDQ5Mi43MTYgNjQ5LjY2OVpNNDc4Ljg4NyAzODcuOTc0QzQ3OC44",
  "ODcgMzk4Ljg4MiA0NzAuMDQzIDQwNy43MjMgNDU5LjEzMiA0MDcuNzIzQzQ0OC4yMjEgNDA3LjcyMyA0",
  "MzkuMzc1IDM5OC44ODIgNDM5LjM3NSAzODcuOTc0QzQzOS4zNzUgMzc3LjA2NiA0NDguMjIxIDM2OC4y",
  "MjIgNDU5LjEzMiAzNjguMjIyQzQ3MC4wNDMgMzY4LjIyMiA0NzguODg3IDM3Ny4wNjYgNDc4Ljg4NyAz",
  "ODcuOTc0Wk02MTUuMjAyIDQxNS42MjRDNjE1LjIwMiA0MzkuNjIyIDU5NS43NDMgNDU5LjA3NSA1NzEu",
  "NzM5IDQ1OS4wNzVDNTQ3LjczNSA0NTkuMDc1IDUyOC4yNzYgNDM5LjYyMiA1MjguMjc2IDQxNS42MjRD",
  "NTI4LjI3NiAzOTEuNjI3IDU0Ny43MzUgMzcyLjE3MyA1NzEuNzM5IDM3Mi4xNzNDNTk1Ljc0MyAzNzIu",
  "MTczIDYxNS4yMDIgMzkxLjYyNyA2MTUuMjAyIDQxNS42MjRaTTUwOC41MjIgNTA5LjQzOUM1MDguNTIy",
  "IDU0My44MDEgNDgwLjY2IDU3MS42NTUgNDQ2LjI5MSA1NzEuNjU1QzQxMS45MjIgNTcxLjY1NSAzODQu",
  "MDYxIDU0My44MDEgMzg0LjA2MSA1MDkuNDM5QzM4NC4wNjEgNDc1LjA3OSA0MTEuOTIyIDQ0Ny4yMjUg",
  "NDQ2LjI5MSA0NDcuMjI1QzQ4MC42NiA0NDcuMjI1IDUwOC41MjIgNDc1LjA3OSA1MDguNTIyIDUwOS40",
  "MzlaTTU1My45NjIgNjEzLjEyOUM1NTMuOTYyIDYyNS4xMjkgNTQ0LjIzMiA2MzQuODU2IDUzMi4yMyA2",
  "MzQuODU2QzUyMC4yMjkgNjM0Ljg1NiA1MTAuNDk5IDYyNS4xMjkgNTEwLjQ5OSA2MTMuMTI5QzUxMC40",
  "OTkgNjAxLjEzMiA1MjAuMjI5IDU5MS40MDUgNTMyLjIzIDU5MS40MDVDNTQ0LjIzMiA1OTEuNDA1IDU1",
  "My45NjIgNjAxLjEzMiA1NTMuOTYyIDYxMy4xMjlaTTU0Mi4xMDggMzE4Ljg0NkM1NDIuMTA4IDMzMC44",
  "NDUgNTMyLjM3OSAzNDAuNTcyIDUyMC4zNzYgMzQwLjU3MkM1MDguMzc1IDM0MC41NzIgNDk4LjY0NSAz",
  "MzAuODQ1IDQ5OC42NDUgMzE4Ljg0NkM0OTguNjQ1IDMwNi44NDcgNTA4LjM3NSAyOTcuMTIgNTIwLjM3",
  "NiAyOTcuMTJDNTMyLjM3OSAyOTcuMTIgNTQyLjEwOCAzMDYuODQ3IDU0Mi4xMDggMzE4Ljg0NlpNNDgw",
  "Ljg2MiAyNTguNjA2QzQ4MC44NjIgMjc0LjQyMyA0NjguMDM5IDI4Ny4yNDUgNDUyLjIxOCAyODcuMjQ1",
  "QzQzNi4zOTYgMjg3LjI0NSA0MjMuNTcyIDI3NC40MjMgNDIzLjU3MiAyNTguNjA2QzQyMy41NzIgMjQy",
  "Ljc5IDQzNi4zOTYgMjI5Ljk2OCA0NTIuMjE4IDIyOS45NjhDNDY4LjAzOSAyMjkuOTY4IDQ4MC44NjIg",
  "MjQyLjc5IDQ4MC44NjIgMjU4LjYwNloiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iOSIgc3Ry",
  "b2tlLWxpbmVjYXA9InJvdW5kIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjIzMl80",
  "NzYiPgo8cmVjdCB3aWR0aD0iNzMzIiBoZWlnaHQ9IjcwOCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0i",
  "dHJhbnNsYXRlKDEzNCAxNDYpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==",
].join("");

const cardStyle: CSSProperties = {
  width: "100%",
  maxWidth: "600px",
  margin: "0 auto",
  backgroundColor: cardBackground,
  borderRadius: "32px",
  border: "1px solid rgba(255,255,255,0.08)",
  overflow: "hidden",
  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  color: "#ffffff",
};

const sectionStyle: CSSProperties = {
  padding: "32px 40px",
};

const textStyle: CSSProperties = {
  margin: "0",
  lineHeight: "1.6",
  fontSize: "15px",
};

const subtleTextStyle: CSSProperties = {
  ...textStyle,
  color: "rgba(255,255,255,0.65)",
};

const badgeStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "12px",
  background:
    "linear-gradient(135deg, rgba(255,46,142,0.15) 0%, rgba(255,46,142,0.05) 100%)",
  border: "1px solid rgba(255,46,142,0.35)",
  borderRadius: "9999px",
  padding: "10px 18px",
  fontSize: "13px",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: accentColor,
};

const checkIconStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "28px",
  height: "28px",
  borderRadius: "9999px",
  backgroundColor: "rgba(255,46,142,0.22)",
  color: accentColor,
  overflow: "hidden",
};

const imageStyle: CSSProperties = {
  display: "block",
  width: "100%",
  height: "auto",
};

export const contactConfirmationSubject = "Oleme Teie päringu kätte saanud";

export function renderContactConfirmationText({
  fullName,
  eventDate,
  serviceType,
}: ContactConfirmationEmailProps) {
  const namePart = fullName ? `Tere, ${fullName}!\n\n` : "";
  const serviceLine = serviceType
    ? `Teenuse valik: ${serviceType}\n`
    : undefined;
  const dateLine = eventDate ? `Ürituse kuupäev: ${eventDate}\n` : undefined;

  return (
    `${namePart}Täname, et võtsite meiega ühendust! ` +
    `Oleme Teie päringu kätte saanud ning võtame Teiega ühendust 48 tunni jooksul.\n\n` +
    (serviceLine ?? "") +
    (dateLine ?? "") +
    "Kui Teil on lisaküsimusi või soovite täpsustada detaile enne, kui me ühendust võtame, vastake julgelt sellele kirjale või helistage numbril +372 5555 1234.\n\n" +
    "Soojade tervitustega,\nMustMull meeskond"
  );
}

export function ContactConfirmationEmail({
  fullName,
  eventDate,
  serviceType,
}: ContactConfirmationEmailProps) {
  const greeting = fullName ? `Tere, ${fullName}!` : "Tere!";

  return (
    <div
      style={{
        backgroundColor: darkBackground,
        padding: "32px 20px",
        margin: "0",
      }}
    >
      <table
        role="presentation"
        cellPadding={0}
        cellSpacing={0}
        style={cardStyle}
      >
        <tbody>
          <tr>
            <td
              style={{
                padding: "48px 40px 36px",
                background:
                  "radial-gradient(circle at 0% 0%, rgba(255,46,142,0.55), transparent 65%), radial-gradient(circle at 100% 0%, rgba(255,195,0,0.25), transparent 55%), #13141c",
              }}
            >
              <div
                style={{
                  marginBottom: "24px",
                  textAlign: "center",
                }}
              >
                <img
                  src={logoSrc}
                  alt="MustMull logo"
                  style={{ ...imageStyle, maxWidth: 160, margin: "0 auto" }}
                  width={160}
                  height={160}
                />
              </div>
              <div style={badgeStyle}>
                <span style={checkIconStyle}>
                  <img
                    src={checkIconSrc}
                    alt=""
                    style={{ ...imageStyle, width: 18, height: 18 }}
                  />
                </span>
                Oleme päringu kätte saanud
              </div>
              <h1
                style={{
                  fontSize: "28px",
                  margin: "28px 0 0",
                  lineHeight: 1.3,
                  fontWeight: 600,
                }}
              >
                Oleme Teie päringu kätte saanud
              </h1>
            </td>
          </tr>
          <tr>
            <td style={sectionStyle}>
              <p
                style={{
                  ...textStyle,
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "12px",
                }}
              >
                {greeting}
              </p>
              <p style={{ ...textStyle, marginBottom: "16px" }}>
                Täname, et võtsite meiega ühendust! Oleme Teie päringu kätte
                saanud ning võtame Teiega ühendust 48 tunni jooksul, et
                täpsustada detailid ja pakkuda Teile parimat võimalikku
                lahendust.
              </p>
              {(serviceType || eventDate) && (
                <div
                  style={{
                    border: `1px solid ${dividerColor}`,
                    borderRadius: "24px",
                    padding: "20px 24px",
                    marginBottom: "20px",
                    backgroundColor: "rgba(21,22,30,0.6)",
                  }}
                >
                  <p
                    style={{
                      ...textStyle,
                      fontWeight: 600,
                      marginBottom: "12px",
                    }}
                  >
                    Päringu kokkuvõte
                  </p>
                  <table
                    role="presentation"
                    cellSpacing={0}
                    cellPadding={0}
                    style={{ width: "100%" }}
                  >
                    <tbody>
                      {serviceType && (
                        <tr>
                          <td
                            style={{
                              ...subtleTextStyle,
                              padding: "4px 0",
                              width: "45%",
                            }}
                          >
                            Teenuse valik
                          </td>
                          <td style={{ ...textStyle, padding: "4px 0" }}>
                            {serviceType}
                          </td>
                        </tr>
                      )}
                      {eventDate && (
                        <tr>
                          <td
                            style={{
                              ...subtleTextStyle,
                              padding: "4px 0",
                              width: "45%",
                            }}
                          >
                            Ürituse kuupäev
                          </td>
                          <td style={{ ...textStyle, padding: "4px 0" }}>
                            {eventDate}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
              <p style={{ ...textStyle, marginBottom: "16px" }}>
                Kui Teil on lisaküsimusi või soovite detaile täpsustada enne,
                kui ühendust võtame, vastake julgelt sellele kirjale või
                helistage numbril{" "}
                <a
                  href="tel:+37255551234"
                  style={{
                    color: accentColor,
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  +372&nbsp;5555&nbsp;1234
                </a>
                .
              </p>
              <p style={{ ...textStyle, marginBottom: "16px" }}>
                Aitäh, et usaldate MustMulli – ootame põnevusega võimalust muuta
                Teie üritus eriliseks!
              </p>
              <p style={textStyle}>
                Soojade tervitustega,
                <br />
                MustMull meeskond
              </p>
            </td>
          </tr>
          <tr>
            <td
              style={{
                ...sectionStyle,
                paddingTop: "0",
                borderTop: `1px solid ${dividerColor}`,
              }}
            >
              <p style={{ ...subtleTextStyle, fontSize: "12px" }}>
                Kui see kiri sattus Teieni ekslikult, andke sellest palun märku,
                vastates e-kirjale.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
