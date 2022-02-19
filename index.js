const axios = require("axios");
const cheerio = require("cheerio");
const { writer, writer_2 } = require("./helpers/whiteData");
const fs = require("fs");
const { argv } = require("process");

const Loader = async(site_link, element, new_file_name) => {
    let content = [];
    try {
        if (argv.length != 2) throw new Error("Oops: your forgot. 3 arguments ('link', 'element-tag' and folder-name) are required to collect your data");
        // ========= MAIN HEADINGS=========== 
        if (element == "h1") {
            const response = await axios(site_link);
            const data = await response.data;
            const $ = cheerio.load(data);
            //Extract headings:

            $(`${element}`, data).each(function() {
                let result = $(this).text().trim();
                content.push({ content: result });
            });
            if (content.length == 0) throw new Error("Oops!!  This data could not be compiled. Try again later");

            // write response to file
            if (!fs.existsSync("data")) {
                fs.mkdir("data", async(err) => {
                    await writer(new_file_name, err, content);
                    return;
                });
            }
            writer_2(new_file_name, content);
        }
        // ========= MAIN HEADINGS=========== 

        // ========SUBHEADINGS ===========
        if (element == "h2") {
            const response = await axios(site_link);
            const data = await response.data;
            const $ = cheerio.load(data);
            //Extract headings:

            $(`${element}`, data).each(function() {
                let result = $(this).text().trim();
                content.push({ content: result });
            });
            if (content.length == 0) throw new Error("Oops!!  This data could not be compiled. Try again later");

            // write response to file
            if (!fs.existsSync("data")) {
                fs.mkdir("data", async(err) => {
                    await writer(new_file_name, err, content);
                    return;
                });
            }
            writer_2(new_file_name, content);
        }
        // ========SUBHEADINGS ===========
        // ========SUBHEADINGS ===========
        if (element == "h3") {
            const response = await axios(site_link);
            const data = await response.data;
            const $ = cheerio.load(data);
            //Extract headings:

            $(`${element}`, data).each(function() {
                let result = $(this).text().trim();
                content.push({ content: result });
            });
            if (content.length == 0) throw new Error("Oops!!  This data could not be compiled. Try again later");

            // write response to file
            if (!fs.existsSync("data")) {
                fs.mkdir("data", async(err) => {
                    await writer(new_file_name, err, content);
                    return;
                });
            }
            writer_2(new_file_name, content);
        }
        // ========SUBHEADINGS ===========
        // ========SUBHEADINGS ===========
        if (element == "h4") {
            const response = await axios(site_link);
            const data = await response.data;
            const $ = cheerio.load(data);
            //Extract headings:

            $(`${element}`, data).each(function() {
                let result = $(this).text().trim();
                content.push({ content: result });
            });
            if (content.length == 0) throw new Error("Oops!!  This data could not be compiled. Try again later");

            // write response to file
            if (!fs.existsSync("data")) {
                fs.mkdir("data", async(err) => {
                    await writer(new_file_name, err, content);
                    return;
                });
            }
            writer_2(new_file_name, content);
        }
        // ========SUBHEADINGS ===========

        // ======== PARAGRAPS========
        if (element == "p") {
            const response = await axios(site_link);
            const data = await response.data;
            const $ = cheerio.load(data);
            //Extract headings:

            $(`${element}`, data).each(function() {
                let result = $(this).text().trim();
                content.push({ content: result });
            });
            if (content.length == 0) throw new Error("Oops!!  This data could not be compiled. Try again later")

            // write response to file
            if (!fs.existsSync("data")) {
                fs.mkdir("data", async(err) => {
                    await writer(new_file_name, err, content);
                    return;
                });
            }
            writer_2(new_file_name, content);
        }
        // ======== PARAGRAPS========
        // ======== IMAGES ========
        if (element == "img") {
            const response = await axios(site_link);
            const data = await response.data;
            const $ = cheerio.load(data);
            //Extract headings:

            $(`${element}`, data).each(function() {
                let result = $(this).attr("src");
                content.push({ content: result });
            });
            if (content.length == 0) throw new Error("Oops!!  This data could not be compiled. Try again later");
            // write response to file
            if (!fs.existsSync("data")) {
                fs.mkdir("data", async(err) => {
                    await writer(new_file_name, err, content);
                    return;
                });
            }
            writer_2(new_file_name, content);
        }
        // ======== IMAGES========
        // ======== LINKS ========
        if (element == "a") {
            const response = await axios(site_link);
            const data = await response.data;
            const $ = cheerio.load(data);
            //Extract headings:

            $(`${element}`, data).each(function() {
                let result = $(this).attr("href");
                content.push({ content: result });
            });
            if (content.length == 0) throw new Error("Oops!!  This data could not be compiled. Try again later");
            // write response to file
            if (!fs.existsSync("data")) {
                fs.mkdir("data", async(err) => {
                    await writer(new_file_name, err, content);
                    return;
                });
            }
            writer_2(new_file_name, content);
        }
        // ======== IMAGES ========

        // ======== LINKS ========
        if (element == "li") {
            const response = await axios(site_link);
            const data = await response.data;
            const $ = cheerio.load(data);
            //Extract headings:

            $(`${element}`, data).each(function() {
                let result = $(this).text().trim();
                content.push({ content: result });
            });
            if (content.length == 0) throw new Error("Oops!!  This data could not be compiled. Try again later");
            // write response to file
            if (!fs.existsSync("data")) {
                fs.mkdir("data", async(err) => {
                    await writer(new_file_name, err, content);
                    return;
                });
            }
            writer_2(new_file_name, content);
        }
        // ======== IMAGES ========
    } catch (ex) {
        console.error({ "Error": { " message": ex.message } });
    }
};

module.exports = Loader;