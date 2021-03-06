/*global module, require */
var Promise = require('bluebird'),
	shell = require('shelljs'),
	tmppath = require('../util/tmppath'),
	archiver = require('archiver'),
	fs = require('fs');
module.exports = function zipdir(path) {
	'use strict';
	var targetFile = tmppath('.zip');
	if (!shell.test('-e', path)) {
		return Promise.reject(path + ' does not exist');
	} else if (!shell.test('-d', path)) {
		return Promise.reject(path + ' is not a directory');
	}
	return new Promise(function (resolve, reject) {
		var archive = archiver.create('zip', {}),
			zipStream = fs.createWriteStream(targetFile);
		zipStream.on('close', function () {
			resolve(targetFile);
		});
		archive.pipe(zipStream);
		archive.bulk([{
			expand: true,
			src: ['**/*'],
			dot: true,
			cwd: path
		}]);
		archive.on('error', function (e) {
			reject(e);
		});
		archive.finalize();
	});
};
