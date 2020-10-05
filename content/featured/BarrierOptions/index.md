---
date: '2020-01-02'
title: 'Engineering Barrier Options in C++'
cover: './pde.png'
github: 'https://github.com/johncai117/Pricing-Barrier-Options'
external: 'https://www.academia.edu/44228698/Pricing_barrier_options_using_PDEs_in_C_'
tech:
  - C++
  - Armadillo
  - XLW
  - Financial Engineering

showInProjects: true
---

Implemented both an exact pricer using a continuous analytic formula and a Partial Differential Equation pricer using C++. Modified the alignment method for the PDE estimation, and found that the fully implicit scheme has smoother convergence compared to the Crank-Nicholson scheme. Applied the Broadie-Glasserman-Kou adjustment formula, which improved convergence of the PDE pricer.
