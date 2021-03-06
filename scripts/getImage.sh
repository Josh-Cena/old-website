doc_list=( $(find ./docs -mindepth 2) )
for doc in "${doc_list[@]}"
do
    mkdir -p "./static/img/""${doc%.*}"
    links=( $(ggrep -o -P "(?<=<Pic src=\").*?(?=\">)" "$doc") )
    for link in "${links[@]}"
    do
        name=$(echo "$link" | ggrep -o -P "(?<=(jpg|png)/).*(?=/640)")
        ext=$(echo "$link" | ggrep -o -P "(?<=wx_fmt=).*")
        wget --output-document="./static/img/""${doc%.*}""/"$name"."$ext "$link"
    done
done
