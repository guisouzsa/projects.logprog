def média(a,b,c,d):
  return (a+b+c+d)/4

nome=input("Escreva seu nome: ")
bimestre1=float(input("Escreva a nota do 1°bimestre: "))
bimestre2=float(input("Escreva a nota do 2°bimestre: "))
bimestre3=float(input("Escreva a nota do 3°bimestre: "))
bimestre4=float(input("Escreva a nota do 4°bimestre: "))

resultado=média(bimestre1,bimestre2,bimestre3,bimestre4)
print("Sua média é: ",resultado)

if (resultado>=7):
  print("Olá "+nome+" você está Aprovado")

elif (resultado>=5):
  print("Olá "+nome+" você de Recuperação")

else:
  print("Olá "+nome+" você está Reprovado")

