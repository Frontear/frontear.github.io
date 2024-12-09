{
  mkShellNoCC,

  frontear-dev,
}:
mkShellNoCC {
  inputsFrom = [
    frontear-dev
  ];
}
