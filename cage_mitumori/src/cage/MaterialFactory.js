import * as THREE from 'three';

/**
 * ケージ表示用の各種マテリアルを管理するファクトリ
 */
export class MaterialFactory {
  constructor() {
    // アルマイトフレーム（デフォルト: 白銀アルマイト AFS-2020-4 準拠: 金属光沢・エッジ反射重視）
    this.aluminum = new THREE.MeshStandardMaterial({
      color: 0xc4cbd4,
      metalness: 0.85,
      roughness: 0.25,
      envMapIntensity: 1.3
    });
    this.currentFrameColor = 'silver';

    // 薄い青色の透明アクリルパネル（側面・背面・底面・前窓）
    this.acrylic = new THREE.MeshStandardMaterial({
      color: 0x93c5fd, // 爽やかなライトブルー
      transparent: true,
      opacity: 0.42,
      roughness: 0.1,
      metalness: 0.1,
      depthWrite: false,
      side: THREE.DoubleSide
    });

    // 正面スライド扉用アクリル（左扉・奥レール）
    // 2枚重なると透過率が落ちて色が濃くなるようにアルファブレンド
    this.doorGlassLeft = new THREE.MeshStandardMaterial({
      color: 0x93c5fd,
      transparent: true,
      opacity: 0.48,
      roughness: 0.08,
      metalness: 0.1,
      depthWrite: false,
      side: THREE.DoubleSide
    });

    // 正面スライド扉用アクリル（右扉・手前レール）
    this.doorGlassRight = new THREE.MeshStandardMaterial({
      color: 0x93c5fd,
      transparent: true,
      opacity: 0.48,
      roughness: 0.08,
      metalness: 0.1,
      depthWrite: false,
      side: THREE.DoubleSide
    });

    // スライド扉のつまみネジ・シリンダー錠（明るい白銀系ステンレス・クローム高品位仕上げ）
    this.handleMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.75,
      roughness: 0.12,
      envMapIntensity: 1.2
    });

    // 天面コード通し用ゴムグロメット（マットブラック）
    this.grommetMaterial = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      metalness: 0.1,
      roughness: 0.85
    });

    // ガラスレール樹脂部材（シルバー時は濃いグレー、ブラック時は黒）
    this.railMaterial = new THREE.MeshStandardMaterial({
      color: 0x484d54,
      metalness: 0.15,
      roughness: 0.55
    });

    // M4エンドキャップ樹脂部材（シルバー時はグレー、ブラック時は黒）
    this.endCapMaterial = new THREE.MeshStandardMaterial({
      color: 0x9aa0a6,
      metalness: 0.1,
      roughness: 0.65
    });

    // キャスター用マテリアル（車輪: マットブラック、ブラケット: クローム/スチール）
    this.casterWheel = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      roughness: 0.7,
      metalness: 0.15
    });
    this.casterBracket = new THREE.MeshStandardMaterial({
      color: 0xd8dee6,
      roughness: 0.22,
      metalness: 0.85,
      envMapIntensity: 1.2
    });

    // 金網用マテリアル（SS400 ポリエチレン樹脂系粉体焼付塗装・黒 近似マンセルNo.N1.0）
    this.wireMesh = new THREE.MeshStandardMaterial({
      color: 0x1c1d1f, // 重厚感のあるマットブラック
      roughness: 0.55,
      metalness: 0.25,
      envMapIntensity: 0.9
    });

    // シルバーインナーフレーム専用マテリアル（黒フレーム時でもシルバーに光る2020白銀アルマイト）
    this.silverInnerFrame = new THREE.MeshStandardMaterial({
      color: 0xc4cbd4,
      metalness: 0.85,
      roughness: 0.25,
      envMapIntensity: 1.3
    });

    // 止まり木用マテリアル（黒ケージ時でもシルバーアルマイト固定）
    this.perchAluminum = new THREE.MeshStandardMaterial({
      color: 0xc4cbd4,
      metalness: 0.85,
      roughness: 0.25,
      envMapIntensity: 1.3
    });
    this.perchGrayCap = new THREE.MeshStandardMaterial({
      color: 0x9aa0a6,
      metalness: 0.1,
      roughness: 0.65
    });
    this.perchBlackCap = new THREE.MeshStandardMaterial({
      color: 0x222326,
      metalness: 0.1,
      roughness: 0.65
    });
    this.perchWhiteScrew = new THREE.MeshStandardMaterial({
      color: 0xf5f6f8,
      roughness: 0.35,
      metalness: 0.1,
      envMapIntensity: 1.0
    });

    // 側面換気量調整板用アクリル (t1.5 外張り透明アクリル板)
    this.ventCoverAcrylic = new THREE.MeshStandardMaterial({
      color: 0x93c5fd, // 爽やかなライトブルー透明
      transparent: true,
      opacity: 0.50,
      roughness: 0.08,
      metalness: 0.1,
      depthWrite: false,
      side: THREE.DoubleSide
    });

    // No.1 化粧つまみネジ（シルバーフレーム時は白、ブラックフレーム時は黒）
    this.thumbScrewMaterial = new THREE.MeshStandardMaterial({
      color: 0xf5f6f8, // 初期値: 白（光沢樹脂・ホワイト）
      roughness: 0.35,
      metalness: 0.1,
      envMapIntensity: 1.0
    });

    // ブラックマット地アクリル (t3: 完全不透明・低グロス・シックな漆黒マット仕上げ)
    this.blackMatteAcrylic = new THREE.MeshStandardMaterial({
      color: 0x18191c,
      roughness: 0.82,
      metalness: 0.04,
      side: THREE.DoubleSide
    });

    // グレースモーク半透明アクリル (t3: コモグラス 530K グレースモーク・暗めの半透明板)
    this.smokeGrayAcrylic = new THREE.MeshStandardMaterial({
      color: 0x2b2e35, // 暗めのスモークグレー
      transparent: true,
      opacity: 0.60,   // 半透明（透け感がありつつ暗い）
      roughness: 0.12,  // アクリルのツヤ・光沢
      metalness: 0.1,
      depthWrite: false,
      side: THREE.DoubleSide
    });

    // 防水コーキング（薄いグレー・シリコンシーリング質感）
    this.caulkingMaterial = new THREE.MeshStandardMaterial({
      color: 0xd2d7dd,
      roughness: 0.42,
      metalness: 0.04,
      envMapIntensity: 0.6
    });

    // モレ対策ゴムパッキン（NSCP1H-S-6 グレー・合成ゴム質感）
    this.rubberPackingMaterial = new THREE.MeshStandardMaterial({
      color: 0x727984,
      roughness: 0.78,
      metalness: 0.06,
      envMapIntensity: 0.5
    });
  }

  /**
   * 中空ポリカ（ツインカーボ）用マテリアル（半透明・すりガラスボケ感・水平リブ筋）
   */
  createPolycaMaterial(texture, bumpTexture) {
    return new THREE.MeshStandardMaterial({
      map: texture,
      bumpMap: bumpTexture,
      bumpScale: 1.2,
      transparent: true,
      opacity: 0.78,
      roughness: 0.32,
      metalness: 0.1,
      side: THREE.DoubleSide,
      depthWrite: false
    });
  }

  /**
   * 塩ビパンチングパネル用マテリアル（青みがかった半透明、アルファマップ適用）
   */
  createPunchingMaterial(alphaMap) {
    return new THREE.MeshStandardMaterial({
      color: 0x93c5fd, // 青みがかった半透明
      alphaMap: alphaMap,
      transparent: true,
      opacity: 0.58,   // 半透明感を持たせる
      roughness: 0.35,  // フロスト調
      metalness: 0.05,
      side: THREE.DoubleSide,
      depthWrite: false
    });
  }

  /**
   * フレームカラーの切り替え（シルバー / ブラック）
   * - アルマイトフレーム、エンドキャップ、ガラスレールの各色を連動更新
   * @param {'silver' | 'black'} colorType
   */
  setFrameColor(colorType) {
    this.currentFrameColor = colorType;
    if (colorType === 'black') {
      // 高級感のあるマットブラック・アルマイト（角ハイライト反射）
      this.aluminum.color.setHex(0x1e2024);
      this.aluminum.metalness = 0.28;
      this.aluminum.roughness = 0.42;
      this.aluminum.envMapIntensity = 0.85;

      // ブラックフレーム連動: エンドキャップ・ガラスレールはブラック、つまみネジは黒
      this.endCapMaterial.color.setHex(0x222326);
      this.railMaterial.color.setHex(0x1e1f22);
      this.thumbScrewMaterial.color.setHex(0x1e1f22);
    } else {
      // 自然な白銀アルマイト金属光沢（AFS-2020-4）
      this.aluminum.color.setHex(0xc4cbd4);
      this.aluminum.metalness = 0.85;
      this.aluminum.roughness = 0.25;
      this.aluminum.envMapIntensity = 1.3;

      // シルバーフレーム連動: エンドキャップはグレー、ガラスレールは濃いグレー、つまみネジは白
      this.endCapMaterial.color.setHex(0x9aa0a6);
      this.railMaterial.color.setHex(0x484d54);
      this.thumbScrewMaterial.color.setHex(0xf5f6f8);
    }
    this.aluminum.needsUpdate = true;
    this.endCapMaterial.needsUpdate = true;
    this.railMaterial.needsUpdate = true;
    this.thumbScrewMaterial.needsUpdate = true;
  }

  dispose() {
    this.aluminum.dispose();
    this.acrylic.dispose();
    this.doorGlassLeft.dispose();
    this.doorGlassRight.dispose();
    this.handleMaterial.dispose();
    this.grommetMaterial.dispose();
    this.railMaterial.dispose();
    this.endCapMaterial.dispose();
    this.casterWheel.dispose();
    this.casterBracket.dispose();
    this.wireMesh.dispose();
    this.silverInnerFrame.dispose();
    this.perchAluminum.dispose();
    this.perchGrayCap.dispose();
    this.perchBlackCap.dispose();
    this.perchWhiteScrew.dispose();
    this.ventCoverAcrylic.dispose();
    this.thumbScrewMaterial.dispose();
    this.blackMatteAcrylic.dispose();
    this.smokeGrayAcrylic.dispose();
  }
}
