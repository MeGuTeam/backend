const supabase = require("../config/supabase");

const particleTrackingUserController = async (req, res) => {
    try {
        const { particle_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("particles_tracker")
            .select("particle_id, status, user_id")
            .eq("user_id", id)
            .eq("particle_id", particle_id);

        if (error) {
            throw new Error("Gagal memeriksa partikel");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("particles_tracker")
                .insert({
                    user_id: id,
                    particle_id: particle_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking partikel");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("particles_tracker")
                    .update({ status: false, updated_at: new Date() })
                    .eq("user_id", id)
                    .eq("particle_id", particle_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status partikel");
                }
            } else {
                const { error: updateError } = await supabase
                    .from("particles_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("particle_id", particle_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status partikel");
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking partikel",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const hiraganaTrackingUserController = async (req, res) => {
    try {
        const { hiragana_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("hiragana_tracker")
            .select("hiragana_id, status, user_id")
            .eq("user_id", id)
            .eq("hiragana_id", hiragana_id);

        if (error) {
            throw new Error("Gagal memeriksa hiragana");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("hiragana_tracker")
                .insert({
                    user_id: id,
                    hiragana_id: hiragana_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking hiragana");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("hiragana_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("hiragana_id", hiragana_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status hiragana");
                }
            } else {
                const { error: updateError } = await supabase
                    .from("hiragana_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("hiragana_id", hiragana_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status hiragana");
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking hiragana",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const katakanaTrackingUserController = async (req, res) => {
    try {
        const { katakana_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("katakana_tracker")
            .select("katakana_id, status, user_id")
            .eq("user_id", id)
            .eq("katakana_id", katakana_id);

        if (error) {
            throw new Error("Gagal memeriksa katakana");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("katakana_tracker")
                .insert({
                    user_id: id,
                    katakana_id: katakana_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking katakana");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("katakana_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("katakana_id", katakana_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status katakana");
                }
            } else {
                const { error: updateError } = await supabase
                    .from("katakana_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("katakana_id", katakana_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status katakana");
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking katakana",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const basicConversationTrackingUserController = async (req, res) => {
    try {
        const { basic_conversation_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("basic_conversation_tracker")
            .select("basic_conversation_id, status, user_id")
            .eq("user_id", id)
            .eq("basic_conversation_id", basic_conversation_id);

        if (error) {
            throw new Error("Gagal memeriksa percakapan dasar");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("basic_conversation_tracker")
                .insert({
                    user_id: id,
                    basic_conversation_id: basic_conversation_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking percakapan dasar");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("basic_conversation_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("basic_conversation_id", basic_conversation_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status percakapan dasar"
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("basic_conversation_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("basic_conversation_id", basic_conversation_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status percakapan dasar"
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking percakapan dasar",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const kanjiTrackingUserController = async (req, res) => {
    try {
        const { kanji_id, status } = req.body;
        const { id } = req.user;
        const { data, error } = await supabase
            .from("kanjis_tracker")
            .select("kanji_id, status, user_id")
            .eq("user_id", id)
            .eq("kanji_id", kanji_id);

        if (error) {
            throw new Error("Gagal memeriksa kanji");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("kanjis_tracker")
                .insert({
                    user_id: id,
                    kanji_id: kanji_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kanji");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("kanjis_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("kanji_id", kanji_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status kanji");
                }
            } else {
                const { error: updateError } = await supabase
                    .from("kanjis_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("kanji_id", kanji_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status kanji");
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kanji ",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const adjectiveTrackingUserController = async (req, res) => {
    try {
        const { adjective_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("adjectives_tracker")
            .select("adjective_id, status, user_id")
            .eq("user_id", id)
            .eq("adjective_id", adjective_id);

        if (error) {
            throw new Error("Gagal memeriksa kata sifat ");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("adjectives_tracker")
                .insert({
                    user_id: id,
                    adjective_id: adjective_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata sifat ");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("adjectives_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("adjective_id", adjective_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status kata sifat ");
                }
            } else {
                const { error: updateError } = await supabase
                    .from("adjectives_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("adjective_id", adjective_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status kata sifat ");
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata sifat ",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const adverbTrackingUserController = async (req, res) => {
    try {
        const { other_word_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("other_words_tracker")
            .select("other_word_id, status, user_id")
            .eq("user_id", id)
            .eq("other_word_id", other_word_id);

        if (error) {
            throw new Error("Gagal memeriksa kata keterangan ");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("other_words_tracker")
                .insert({
                    user_id: id,
                    other_word_id: other_word_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata keterangan ");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("other_words_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("other_word_id", other_word_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata keterangan "
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("other_words_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("other_word_id", other_word_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata keterangan "
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata keterangan ",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const verbTrackingUserController = async (req, res) => {
    try {
        const { verb_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("verbs_tracker")
            .select("verb_id, status, user_id")
            .eq("user_id", id)
            .eq("verb_id", verb_id);

        if (error) {
            throw new Error("Gagal memeriksa kata kerja ");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("verbs_tracker")
                .insert({
                    user_id: id,
                    verb_id: verb_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata kerja ");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("verbs_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("verb_id", verb_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status kata kerja ");
                }
            } else {
                const { error: updateError } = await supabase
                    .from("verbs_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("verb_id", verb_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status kata kerja ");
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata kerja ",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounActivityTrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status, user_id")
            .eq("user_id", id)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa aktivitas kata benda ");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("nouns_tracker")
                .insert({
                    user_id: id,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error(
                    "Gagal menyimpan tracking aktivitas kata benda "
                );
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status aktivitas kata benda "
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status aktivitas kata benda "
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking aktivitas kata benda ",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounAnimalplantTrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status, user_id")
            .eq("user_id", id)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda hewan dan tumbuhan ");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("nouns_tracker")
                .insert({
                    user_id: id,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error(
                    "Gagal menyimpan tracking kata benda hewan dan tumbuhan "
                );
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda hewan dan tumbuhan "
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda hewan dan tumbuhan "
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message:
                "Berhasil menyelesaikan tracking kata benda hewan dan tumbuhan ",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounAuxnumberTrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status, user_id")
            .eq("user_id", id)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda angka bantu ");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("nouns_tracker")
                .insert({
                    user_id: id,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error(
                    "Gagal menyimpan tracking kata benda angka bantu "
                );
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda angka bantu "
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda angka bantu "
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda angka bantu ",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounBodyTrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status, user_id")
            .eq("user_id", id)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda tubuh ");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("nouns_tracker")
                .insert({
                    user_id: id,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata benda tubuh ");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda tubuh "
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda tubuh "
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda tubuh ",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounCityTrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status, user_id")
            .eq("user_id", id)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda kota ");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("nouns_tracker")
                .insert({
                    user_id: id,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata benda kota ");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda kota "
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda kota "
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda kota ",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounColorTrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status, user_id")
            .eq("user_id", id)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda warna ");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("nouns_tracker")
                .insert({
                    user_id: id,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata benda warna ");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda warna "
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda warna "
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda warna ",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounFoodDrinkTrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status, user_id")
            .eq("user_id", id)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda makanan dan minuman ");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("nouns_tracker")
                .insert({
                    user_id: id,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error(
                    "Gagal menyimpan tracking kata benda makanan dan minuman "
                );
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda makanan dan minuman "
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda makanan dan minuman "
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message:
                "Berhasil menyelesaikan tracking kata benda makanan dan minuman ",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounHomeAppliancesTrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status, user_id")
            .eq("user_id", id)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error(
                "Gagal memeriksa kata benda peralatan rumah tangga "
            );
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("nouns_tracker")
                .insert({
                    user_id: id,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error(
                    "Gagal menyimpan tracking kata benda peralatan rumah tangga "
                );
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda peralatan rumah tangga "
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda peralatan rumah tangga "
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message:
                "Berhasil menyelesaikan tracking kata benda peralatan rumah tangga ",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounKosoadoTrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status, user_id")
            .eq("user_id", id)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda kosoado ");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("nouns_tracker")
                .insert({
                    user_id: id,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata benda kosoado ");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda kosoado "
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda kosoado "
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda kosoado ",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounMediaTrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status, user_id")
            .eq("user_id", id)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda media ");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("nouns_tracker")
                .insert({
                    user_id: id,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata benda media ");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda media "
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda media "
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda media ",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounNaturalTrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status, user_id")
            .eq("user_id", id)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda alam ");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("nouns_tracker")
                .insert({
                    user_id: id,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata benda alam ");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda alam "
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda alam "
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda alam ",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounNumberTrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status, user_id")
            .eq("user_id", id)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda angka ");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("nouns_tracker")
                .insert({
                    user_id: id,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata benda angka ");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda angka "
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda angka "
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda angka ",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounOutfitTrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status, user_id")
            .eq("user_id", id)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda pakaian ");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("nouns_tracker")
                .insert({
                    user_id: id,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata benda pakaian ");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda pakaian "
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda pakaian "
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda pakaian ",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounPeopleTrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status, user_id")
            .eq("user_id", id)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda orang ");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("nouns_tracker")
                .insert({
                    user_id: id,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata benda orang ");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda orang "
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda orang "
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda orang ",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounPositionTrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status, user_id")
            .eq("user_id", id)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda posisi ");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("nouns_tracker")
                .insert({
                    user_id: id,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata benda posisi ");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda posisi "
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("tracking")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda posisi "
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda posisi ",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounRegionTrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status, user_id")
            .eq("user_id", id)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda wilayah ");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("nouns_tracker")
                .insert({
                    user_id: id,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata benda wilayah ");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda wilayah "
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda wilayah "
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda wilayah ",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounSchoolTrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status, user_id")
            .eq("user_id", id)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda sekolah ");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("nouns_tracker")
                .insert({
                    user_id: id,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata benda sekolah ");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda sekolah "
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda sekolah "
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda sekolah ",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounTimeTrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status, user_id")
            .eq("user_id", id)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda waktu ");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("nouns_tracker")
                .insert({
                    user_id: id,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata benda waktu ");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda waktu "
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda waktu "
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda waktu ",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounTrafficTrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status, user_id")
            .eq("user_id", id)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda lalu lintas ");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("nouns_tracker")
                .insert({
                    user_id: id,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error(
                    "Gagal menyimpan tracking kata benda lalu lintas "
                );
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda lalu lintas "
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda lalu lintas "
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda lalu lintas ",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const nounWorkTrackingUserController = async (req, res) => {
    try {
        const { noun_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("nouns_tracker")
            .select("noun_id, status, user_id")
            .eq("user_id", id)
            .eq("noun_id", noun_id);

        if (error) {
            throw new Error("Gagal memeriksa kata benda pekerjaan ");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("nouns_tracker")
                .insert({
                    user_id: id,
                    noun_id: noun_id,
                    status: true,
                });

            if (insertError) {
                throw new Error(
                    "Gagal menyimpan tracking kata benda pekerjaan "
                );
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda pekerjaan "
                    );
                }
            } else {
                const { error: updateError } = await supabase
                    .from("nouns_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("noun_id", noun_id);

                if (updateError) {
                    throw new Error(
                        "Gagal memperbarui status kata benda pekerjaan "
                    );
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata benda pekerjaan ",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const questionWordTrackingUserController = async (req, res) => {
    try {
        const { other_word_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("other_words_tracker")
            .select("other_word_id, status, user_id")
            .eq("user_id", id)
            .eq("other_word_id", other_word_id);

        if (error) {
            throw new Error("Gagal memeriksa kata tanya ");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("other_words_tracker")
                .insert({
                    user_id: id,
                    other_word_id: other_word_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata tanya ");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("other_words_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("other_word_id", other_word_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status kata tanya ");
                }
            } else {
                const { error: updateError } = await supabase
                    .from("other_words_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("other_word_id", other_word_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status kata tanya ");
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata tanya ",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

const conjunctionTrackingUserController = async (req, res) => {
    try {
        const { conjunction_id, status } = req.body;
        const { id } = req.user;

        const { data, error } = await supabase
            .from("other_words_tracker")
            .select("other_word_id, status, user_id")
            .eq("user_id", id)
            .eq("other_word_id", conjunction_id);

        if (error) {
            throw new Error("Gagal memeriksa kata hubung ");
        }

        if (data.length === 0) {
            const { error: insertError } = await supabase
                .from("other_words_tracker")
                .insert({
                    user_id: id,
                    other_word_id: conjunction_id,
                    status: true,
                });

            if (insertError) {
                throw new Error("Gagal menyimpan tracking kata hubung ");
            }
        } else {
            if (status === "true" || status === true) {
                const { error: updateError } = await supabase
                    .from("other_words_tracker")
                    .update({ status: false })
                    .eq("user_id", id)
                    .eq("other_word_id", conjunction_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status kata hubung ");
                }
            } else {
                const { error: updateError } = await supabase
                    .from("other_words_tracker")
                    .update({ status: true })
                    .eq("user_id", id)
                    .eq("other_word_id", conjunction_id);

                if (updateError) {
                    throw new Error("Gagal memperbarui status kata hubung ");
                }
            }
        }

        return res.status(200).json({
            error: false,
            message: "Berhasil menyelesaikan tracking kata hubung ",
        });
    } catch (err) {
        return res.status(500).json({
            error: true,
            message: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            data: null,
        });
    }
};

module.exports = {
    particleTrackingUserController,
    hiraganaTrackingUserController,
    katakanaTrackingUserController,
    basicConversationTrackingUserController,
    kanjiTrackingUserController,
    adjectiveTrackingUserController,
    adverbTrackingUserController,
    verbTrackingUserController,
    nounActivityTrackingUserController,
    nounAnimalplantTrackingUserController,
    nounAuxnumberTrackingUserController,
    nounBodyTrackingUserController,
    nounCityTrackingUserController,
    nounColorTrackingUserController,
    nounFoodDrinkTrackingUserController,
    nounHomeAppliancesTrackingUserController,
    nounKosoadoTrackingUserController,
    nounMediaTrackingUserController,
    nounNaturalTrackingUserController,
    nounNumberTrackingUserController,
    nounOutfitTrackingUserController,
    nounPeopleTrackingUserController,
    nounPositionTrackingUserController,
    nounRegionTrackingUserController,
    nounSchoolTrackingUserController,
    nounTimeTrackingUserController,
    nounTrafficTrackingUserController,
    nounWorkTrackingUserController,
    questionWordTrackingUserController,
    kanjiTrackingUserController,
    conjunctionTrackingUserController,
};
