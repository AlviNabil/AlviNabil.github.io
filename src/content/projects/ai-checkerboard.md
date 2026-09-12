---
title: "AI CheckerBoard"
blurb: "Checkers with a minimax opponent and alpha-beta pruning."
year: "2023"
role: "Coursework · CSE-4110 Artificial Intelligence"
stack: ["Python", "Pygame", "Minimax", "Alpha-beta pruning"]
repo: "https://github.com/AlviNabil/AI_CheckerBoard"
order: 4
---

A playable checkers board with a search-based opponent: minimax over the game
tree, alpha-beta pruning to cut branches that cannot affect the outcome, and a
positional evaluation function weighting material, kings and board control.

Written for the Artificial Intelligence lab at KUET. Search depth is the main
trade-off. Each additional ply multiplies the nodes to evaluate, and alpha-beta
only helps if you order moves well enough to prune early.
