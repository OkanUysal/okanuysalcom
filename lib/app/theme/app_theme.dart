import 'package:flutter/material.dart';

class AppThemeData {
  final Color body;
  final Color text;
  final Color highlight;
  final Color dark;
  final Color secondaryText;
  final Color imageHighlight;
  final Color compImgHighlight;
  final Color jacketColor;
  final Color headerColor;

  const AppThemeData({
    required this.body,
    required this.text,
    required this.highlight,
    required this.dark,
    required this.secondaryText,
    required this.imageHighlight,
    required this.compImgHighlight,
    required this.jacketColor,
    required this.headerColor,
  });

  // React'teki `chosenTheme = blackTheme;` karşılığı.
  factory AppThemeData.black() {
    return AppThemeData(
      body: _fromHex('#E5E5E5'),
      text: _fromHex('#14213d'),
      highlight: _fromHex('#ffffff'),
      dark: _fromHex('#000000'),
      secondaryText: _fromHex('#5A6377'),
      imageHighlight: _fromHex('#fca311'),
      compImgHighlight: _fromHex('#E6E6E6'),
      jacketColor: _fromHex('#8d99ae'),
      // headerColor: "#fca31177" (alpha dahil)
      headerColor: _fromHex('#fca31177'),
    );
  }

  static Color _fromHex(String hex) {
    var clean = hex.replaceAll('#', '').trim();
    if (clean.length == 6) {
      clean = 'FF$clean';
    } else if (clean.length == 8) {
      // React/CSS genelde #RRGGBBAA formatını kullanıyor (alpha en sonda).
      // Flutter Color: 0xAARRGGBB
      final rrggbb = clean.substring(0, 6);
      final aa = clean.substring(6, 8);
      clean = '$aa$rrggbb';
    }
    return Color(int.parse(clean, radix: 16));
  }
}

