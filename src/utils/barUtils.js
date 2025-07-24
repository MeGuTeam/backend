const getProgressInfo = (trackData, options = {}) => {
    if (!trackData || trackData.length === 0)
        return { finished: 0, lastProgress: null, subCategory: null };
    const finishedItems = trackData.filter((item) => item.status === true);
    const finished = finishedItems.length;
    let lastProgress = null;
    let subCategory = null;
    if (finishedItems.length > 0) {
        const lastItem = finishedItems
            .slice()
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))[0];
        lastProgress = lastItem.updated_at;

        if (options.relationTypeField && lastItem[options.relationTypeField]) {
            subCategory = lastItem[options.relationTypeField].type || null;
        } else {
            subCategory = lastItem.type || null;
        }
    }
    return { finished, lastProgress, subCategory };
};

const nounTypeMapping = {
    activity: "katabendaaktifitas",
    animalplant: "katabendaalam",
    auxnumber: "katabendaangka",
    body: "katabendatubuh",
    city: "katabendakota",
    color: "katabendawarna",
    fooddrink: "katabendamakananminuman",
    homeappliances: "katabendaperalatanrumahtangga",
    kosoado: "katabendakosoado",
    media: "katabendamedia",
    natural: "katabendaalam",
    number: "katabendaangka",
    outfit: "katabendaoutfit",
    people: "katabendaorang",
    position: "katabendaposisi",
    region: "katabendawilayah",
    school: "katabendasekolah",
    time: "katabendawaktu",
    traffic: "katabendatraffic",
    work: "katakerja",
};

module.exports = { getProgressInfo, nounTypeMapping };
