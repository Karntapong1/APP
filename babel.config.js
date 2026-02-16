module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["nativewind/babel"], // ตรวจสอบว่ามีบรรทัดนี้
  };
};