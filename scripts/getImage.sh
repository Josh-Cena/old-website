doc_list=( $(find ./docs -mindepth 2) )
for doc in "${doc_list[@]}"
do
    if [ ! -d "./static/img/""${doc%.*}" ]; then
        mkdir -p "./static/img/""${doc%.*}"
        links=( $(grep -o -P "(?<=<Pic src=\").*?(?=\">)" "$doc") )
        for link in "${links[@]}"
        do
            name=$(echo "$link" | grep -o -P "(?<=(jpg|png)/).*(?=/640)")
            ext=$(echo "$link" | grep -o -P "(?<=wx_fmt=).*")
            wget --output-document="./static/img/""${doc%.*}""/"$name"."$ext "$link"
        done
    fi
done
