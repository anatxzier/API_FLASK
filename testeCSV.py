# import csv
# import pandas as pd

# ######## Leitura

# with open ("Text.csv", 'r') as arq:
#     leitor = csv.reader(arq)
#     for linhas in leitor:
#         print(linhas)

# ######## Escrita

# with open ("Text.csv", 'w') as arq:
#     escritor = csv.writer(arq)
#     escritor.writerow(["5","Estudar Pandas"])


# with open ("Text.csv", 'r') as arq:
#     leitor = csv.reader(arq)
#     for linhas in leitor:
#         print(linhas)
    

####################################################

######## Leitura

# leitor = pd.read_csv("Text.csv")
# print(leitor)

######## Escrita

# escritor = pd.read_csv('Text.csv')
# id = len(escritor) + 1
# with open('Text.csv', 'a') as arq:
#     arq.write(f"{id},Estudar Pandas\n")
# escritor = pd.read_csv('Text.csv')
# print(escritor)

# escritor.loc[id] = [id, "Estudar Pandas"]
# print(escritor)
# escritor.to_csv('Text.csv', index=False)

