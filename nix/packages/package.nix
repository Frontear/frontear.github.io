{
  lib,
  stdenvNoCC,
  importNpmLock,

  nodejs,
}:
stdenvNoCC.mkDerivation (finalAttrs: {
  pname = "frontear-dev";
  version = "0.1.0";

  src = ../../www;

  npmDeps = importNpmLock.buildNodeModules {
    inherit nodejs;

    npmRoot = finalAttrs.src;
  };

  nativeBuildInputs = [
    nodejs
  ];

  configurePhase = ''
    mkdir -p node_modules

    ln -sft node_modules $npmDeps/node_modules/*
  '';

  buildPhase = ''
    export HOME=$(mktemp -d)
    export PATH="$npmDeps/node_modules/.bin:$PATH"

    astro build
  '';

  installPhase = ''
    mv dist $out
  '';

  meta = with lib; {
    license = licenses.agpl3Plus;
    platforms = platforms.all;
    maintainers = with maintainers; [ frontear ];
  };
})
