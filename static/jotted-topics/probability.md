---
header: Probability
description: Probably relevant.
---

# Probabilistic Models

### Experiment

The problem at hand.

### Outcome

The results of the [experiment](#experiment).

### Sample Space ($\Omega$)

The set of all possible [outcomes](#outcome) of an [experiment](#experiment).

### Event

A subset of the [sample space](#sample-space-omega) containing the possible [outcomes](#outcome).

### Mutual Exclusivity (Disjointness)

Elements of the [sample space](#sample-space-omega) should be distinct.

### Collectively Exhaustive

All of the [events](#event) must be accounted for in the [sample space](#sample-space-omega).

# Probability Axioms

### Non-negativity

For each event $A$, 

$$\bold{P}(A) \geq 0$$

### Additivity

If the sets $A$ and $B$ are [disjoint](/sets/#disjoint) events, then:

$$\bold{P}(A \cup B) = \bold{P}(A) + \bold{P}(B)$$

### Normalization

The probability of the [sample space](#sample-space-omega) is equal to $1$.

$$\bold{P}(\Omega) = 1$$

# Discrete Models

### Discrete Probability

The probability of an event $\left\{s_1, s_2, ..., s_3\right\}$ is the sum of of the probabilities of its elements:

$$\bold{P}(\left\{s_1, s_2, ..., s_3\right\}) = \bold{P}(s_1) + \bold{P}(s_2) + ... + \bold{P}(s_n) $$

### Discrete Uniform Probability Law

Given an event $A$ with $n$ possible outcomes, the probability of any event $A$ is:

$$\bold{P}(A) = \frac{\text{number of elements of A}}{n}$$

# Conditional Probability

When only partial information is given and we want to know the outcome of an experiment, conditional probability is useful.

Let $A$ and $B$ be two events. The conditional probability of $A$ given $B$ is denoted as:

$$\bold{P}(A|B)=\frac{\bold{P}(A \cap B)}{\bold{P}(B)}$$

where $\bold{P}(B) \gt 0$.

## Multiplication Rule

Assuming all of the conditioning events have positive probability,

$$\bold{P}(\bigcap^n_{i=1} A_i = \bold{P}(A_1) \bold{P}(A_2|A_1)\bold{P}(A_3|A_1 \cap A_2) ... \bold{P}(A_n | \bigcap^{n-1}_{i=1}) A_i$$


## Total Probability Theorem

Let $A_1 ... A_n$ be disjoint events that form a partition of the sample space and assume $\bold{P}(A_i) > 0 \forall i$. For any event $B$,

$$\bold{P}(B) = \bold{P}(A_1 \cap B) + ... + \bold{P}(A_n \cap B) \\
= \bold{P}(A_1)\bold{P}(B|A_1) + ... + \bold{P}(A_n)\bold{P}(B|A_n)$$

## Bayes' Rule

$$\bold{P}(A_i | B) = \frac{\bold{P}(A_i)\bold{P}(B | A_i)}{\bold{P}(B)}$$
