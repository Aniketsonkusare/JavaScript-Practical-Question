function occ(params) {
    let occurces = {}
    params.split("").forEach(element => {
        if (occurces.hasOwnProperty(element) === false) {
            occurces[element] = 1
        }
        else{
            occurces[element]++
        }
    });
    return occurces
}

console.log(occ("LoremipsumdolorsitametconsecteturadipisicingelitQuosexpeditamollitiaillovoluptatenemoearumeiusaccusantiumiste!Nihilquasiteneturofficiacorruptimagnamillofacereporroaliasminusneque."));