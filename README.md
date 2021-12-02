# todolistjs

##Group list : 
Zouhair ouknaz 
Hamza el Founir 
Abd Elghafour 
moubarik 
Hamza hilali


## **Cahier des charges projet To-do List**(Version FR)****

**Vous travaillez dans une startup Intelvia qui offre des services de marketing. Votre Chef de projet souhaite avoir un outil de gestion de projet pour des utilisations interne. L’objectif principal de cette mission est la réalisation d’une application TODOS.**

1. "Todos" représente des objets que vous voudrez créer dynamiquement, ce qui signifie que vous devrez utiliser des constructeurs/classes pour les générer.
2. Réfléchissez au type de propriétés que vos éléments ‘to do’ devront avoir. Au minimum, ils devraient avoir un titre, un descriptif, une date d'échéance et une priorité. Vous pouvez également inclure des notes ou même une liste de contrôle.
3. Votre to do doit comporter des projets ou des to do distinctes.
4. Lorsqu'un utilisateur ouvre l'application pour la première fois, il doit y avoir une sorte de projet "par défaut" dans lequel toutes ses tâches sont placées. Les utilisateurs doivent pouvoir créer de nouveaux projets et choisir dans quel projet leurs tâches sont placées.
5. Vous devez séparer la logique de l'application (c'est-à-dire créer de nouveaux Todos, définir les Todos comme étant complets, changer la priorité des Todos, etc.) des éléments liés au DOM, donc gardez toutes ces choses dans des modules séparés.
6. L'apparence de l'interface utilisateur est à votre discrétion, mais elle doit être capable de faire ce qui suit :
    1. Afficher tous les projets
    2. Afficher tous les Todos de chaque projet (probablement juste le titre et la date... peut-être en changeant la couleur pour les différentes priorités)
    3. Développer une seule tâche pour voir/éditer ses détails
    4. Supprimer une tâche
    5. Pour vous inspirer, jetez un coup d'œil aux applications suivantes. :
        1. Todoist
        2. Choses
        3. any.do
7. Comme vous utilisez probablement déjà webpack, l'ajout de bibliothèques externes à partir de npm! Vous pourriez envisager d'utiliser la bibliothèque utile suivante dans votre code :
8. « Date-fns » vous donne un groupe de fonctions pratiques pour formater et manipuler les dates et les heures.
9. Nous n'avons appris aucune technique pour stocker nos données nulle part, donc lorsque l'utilisateur rafraîchit la page, tous ses to do disparaissent ! Vous devez ajouter une certaine persistance à cette application to do en utilisant l'API de stockage Web.
10. LocalStorage vous permet d'enregistrer des données sur l'ordinateur de l'utilisateur. L'inconvénient de cette dernière est que les données ne sont accessibles QUE sur l'ordinateur sur lequel elles ont été créées. Malgré tout, c'est assez pratique ! Mettez en place une fonction qui enregistre les projets / les tâches dans localStorage à chaque fois qu'un nouveau projet (ou tâche) est créé, et une autre fonction qui recherche ces données dans localStorage lorsque votre application est chargée pour la première fois. En outre, voici quelques conseils rapides pour vous aider à ne pas tomber dans le piège :
11. Assurez-vous que votre application ne plante pas si les données que vous souhaitez récupérer dans localStorage ne sont pas présentes !
12. localStorage utilise le langage JSON pour envoyer et stocker les données, et lorsque vous récupérez les données, elles sont également au format JSON. Vous en apprendrez davantage sur ce langage dans des prochaine Briefs, mais il n'est pas inutile de vous familiariser avec lui dès maintenant. Gardez à l'esprit qu'il n'est pas possible de stocker des fonctions dans le format JSON. Vous devrez donc trouver un moyen d'ajouter des méthodes aux propriétés de vos objets une fois que vous les aurez récupérés.

Bonne chance !
