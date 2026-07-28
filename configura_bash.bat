@echo off
echo Configurando Git...

REM Define diretamente o nome de usuário e e-mail
set username=Maria Eduarda
set useremail=mariaaeduardadematos@gmail.com

REM Configurações globais do Git
git config --global user.name "%username%"
git config --global user.email "%useremail%"

echo.
echo Configurações aplicadas com sucesso:
git config --global user.name
git config --global user.email

exit