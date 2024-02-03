export type langType = {
  main: {
    signupButton: string,
    loginButton: string,
    logo_text_1: string,
    logo_text_2: string,
  },
  login: {
    formPage: {
      header: {
        titleLine1: string,
        titleLine2: string,
      },
      button: string,
      forgetPassword: string,
      donthaveAccount: string,
      createOne: string,
    },
    forgotPasswordPage: {
      title: string,
      submit: string,
      notification: string,
    },
    submit_result: {
      success_text: string
      err_text: string
    }
  }
  signup: {
    formPage: {
      header: {
        titleLine1: string,
        titleLine2: string,
      },
      emailAddress: string,
      password: string,
      validation: {
        email: {
          title: string,
          title2: string,
        },
        password: {
          items: [
            string,
            string,
            string,
            string,
          ]
        },
      },
      promoCode: string,
      agree: {
        prefix: string,
        bold: string,
        suffix: string,
      },
      agree_alert_text: string
      alreadyAccount: string,
      signIn: string,
      button: string,
      divider: string,
    },
    confirmCancelPage: {
      title: string,
      description: string,
      continue: string,
      cancel: string,
    },
    alreadyRegisterPage: {
      title: string,
      confirm: string,
      cancel: string,
    },
    displayNamePage: {
      title: string,
      username: string,
      validation: {
        username: {
          title: string,
          items: [
            string,
            string,
          ]
        }
      },
      submit: string,
    },
    submit_result: {
      success_text: string
    }
  },
  err_result: {
    err_text_1: string
    err_text_2: string
    err_text_3: string
    err_text_4: string
    err_text_5: string
    err_text_6: string
    err_text_7: string
    err_text_8: string
    err_text_9: string
    err_text_10: string
    err_text_11: string
    err_text_12: string
    err_text_13: string
    err_text_14: string
    err_text_15: string
    err_text_16: string
    err_text_17: string
    err_text_18: string
    err_text_19: string
    err_text_20: string
  }
  signout: {
    text_1: string
    text_2: string
    text_3: string
    button: string
  }
  navBar: {
    casino: string,
    sport: string,
    rewards_center: string,
    more: string,
    live_support: string,
    earn_free_text: string
    task_text: string
    unlock_text: string
    spin_text: string
    login_bonus_text: string
    lucky_wheel_text: string
    refer_earn_text: string
    menu_item_1: {
      promotions: string
      vip_club: string
      affiliate: string
      blog: string
    },
    casino_sub_menu: {
      hot_text: string
      recently_played: string
      favorites: string
      game_originals: string
      slots: string
      live_casino: string
      provider_text: string
    },
    language: {
      title: string
      english: string
      portuguese: string
      espanola: string
    },
    sound_mode: {
      on: string
      off: string
    }
  }
  rightBar: {
    dropdownItem: {
      casino: string
      sport: string
    }
    bottom: {
      yourMessage: string
    }
  }
  appBar: {
    logo_text_1: string
    logo_text_2: string
    id: string
    account: string
    deposit: string
    wager: string
    bonuses: string
    game_history: string
    transactions: string
    refer_friend: string
    earn_money: string
    withdraw: string
    install: string
    app: string
    fairness: string
    rewards: string
    preferences: string
    statistics: string
    sign_out: string
    vip: {
      bronze: string,
    }
  }
  about: {    
    page: {
      text_1: string
      text_2: string
      text_3: string
      text_4: string
      text_5: string
      text_6: string
      text_7: string
      text_8: string
      text_9: string
      text_10: string
      text_11: string
      text_12: string
      text_13: string
      text_14: string
      text_15: string
      text_16: string
      text_17: string
      text_18: string
      text_19: string
      text_20: string
      text_21: string
      text_22: string
      text_23: string
      text_24: string
      text_25: string
      text_26: string
      text_27: string
      text_28: string
      text_29: string
      text_30: string
      text_31: string
      text_32: string
      text_33: string
      text_34: string
      text_35: string
      text_36: string
      text_37: string
      text_38: string
      text_39: string
      text_40: string
      text_41: string
      text_42: string
      text_43: string
      text_44: string
      text_45: string
      text_46: string
      text_47: string
      text_48: string
      text_49: string
      text_50: string
      text_51: string
      text_52: string
      text_53: string
      text_54: string
      text_55: string
      text_56: string
      text_57: string
      text_58: string
      text_59: string
      text_60: string
      text_61: string
      text_62: string
      text_63: string
      text_64: string
      text_65: string
      text_66: string
      text_67: string
      text_68: string
      text_69: string
      text_70: string
      text_71: string
      text_72: string
      text_73: string
      text_74: string
      text_75: string
      text_76: string
      text_77: string
      text_78: string
      text_79: string
      text_80: string
      text_81: string
      text_82: string
      text_83: string
      text_84: string
      text_85: string
      text_86: string
      text_87: string
      text_88: string
      text_89: string
      text_90: string
      text_91: string
      text_92: string
      text_93: string
      text_94: string
      text_95: string
      text_96: string
      text_97: string
      text_98: string
      text_99: string
      text_100: string
      text_101: string
      text_102: string
      text_103: string
      text_104: string
      text_105: string
      text_106: string
      text_107: string
      text_108: string
      text_109: string
      text_110: string
      text_111: string
      text_112: string
      text_113: string
      text_114: string
      text_115: string
      text_116: string
      text_117: string
      text_118: string
      text_119: string
      text_120: string
      text_121: string
      text_122: string
      text_123: string
      text_124: string
      text_125: string
      text_126: string
      text_127: string
      text_128: string
      text_129: string
      text_130: string
      text_131: string
      text_132: string
      text_133: string
      text_134: string
      text_135: string
      text_136: string
      text_137: string
      text_138: string
      text_139: string
      text_140: string
      text_141: string
      text_142: string
      text_143: string
      text_144: string
      text_145: string
      text_146: string
      text_147: string
      text_148: string
      text_149: string
      text_150: string
      text_151: string
      text_152: string
      text_153: string
      text_154: string
      text_155: string
      text_156: string
      text_157: string
      text_158: string
      text_159: string
      text_160: string
      text_161: string
      text_162: string
      text_163: string
      text_164: string
      text_165: string
      text_166: string
      text_167: string
      text_168: string
      text_169: string
      text_170: string
      text_171: string
      text_172: string
      text_173: string
      text_174: string
      text_175: string
      text_176: string
      text_177: string
      text_178: string
      text_179: string
      text_180: string
      text_181: string
      text_182: string
      text_183: string
      text_184: string
      text_185: string
      text_186: string
      text_187: string
      text_188: string
      text_189: string
      text_190: string
      text_191: string
      text_193: string
      text_194: string
      text_195: string
      text_196: string
      text_197: string
      text_198: string
      text_199: string
      text_200: string
      text_201: string
      text_202: string
      text_203: string
      text_204: string
      text_205: string
      text_206: string
      text_207: string
      text_208: string
      text_209: string
      text_210: string
      text_211: string
      text_212: string
      text_213: string
      text_214: string
      text_215: string
      text_216: string
      text_217: string
      text_218: string
      text_219: string
      text_220: string
      text_221: string
      text_222: string
      text_223: string
      text_224: string
      text_225: string
      text_226: string
      text_227: string
      text_228: string
      text_229: string
      text_230: string
      text_231: string
      text_232: string
      text_233: string
      text_234: string
      text_235: string
      text_236: string
      text_237: string
      text_238: string
      text_239: string
      text_240: string
      text_241: string
      text_242: string
      text_243: string
      text_244: string
      text_245: string
      text_246: string
      text_247: string
      text_248: string
      text_249: string
      text_250: string
      text_251: string
      text_252: string
      text_253: string
      text_254: string
      text_255: string
      text_256: string
      text_257: string
      text_258: string
      text_259: string
      text_260: string
      text_261: string
      text_262: string
      text_263: string
      text_264: string
      text_265: string
      text_266: string
      text_267: string
      text_268: string
      text_269: string
      text_270: string
      text_271: string
      text_272: string
      text_273: string
      text_274: string
      text_275: string
      text_276: string
      text_277: string
      text_278: string
      text_279: string
      text_280: string
      text_281: string
      text_283: string
      text_284: string
      text_285: string
      text_286: string
      text_287: string
      text_288: string
      text_289: string
      text_290: string
      text_291: string
      text_293: string
      text_294: string
      text_295: string
      text_296: string
      text_297: string
      text_298: string
      text_299: string
      text_300: string
      text_301: string
      text_302: string
      text_303: string
      text_304: string
      text_305: string
      text_306: string
      text_307: string
      text_308: string
      text_309: string
      text_310: string
      text_311: string
      text_312: string
      text_313: string
      text_314: string
      text_315: string
      text_316: string
      text_317: string
      text_318: string
      text_319: string
      text_320: string
      text_321: string
      text_322: string
      text_323: string
      text_324: string
      text_325: string
      text_326: string
      text_327: string
      text_328: string
      text_329: string
      text_330: string
      text_331: string
      text_332: string
      text_333: string
      text_334: string
      text_335: string
      text_336: string
      text_337: string
      text_338: string
      text_339: string
      text_340: string
      text_341: string
      text_342: string
      text_343: string
      text_344: string
      text_345: string
      text_346: string
      text_347: string
      text_348: string
      text_349: string
      text_350: string
      text_351: string
      text_352: string
      text_353: string
      text_354: string
      text_355: string
      text_356: string
      text_357: string
      text_358: string
      text_359: string
      text_360: string
      text_361: string
      text_362: string
      text_363: string
      text_364: string
      text_365: string
      text_366: string
      text_367: string
      text_368: string
      text_369: string
      text_370: string
      text_371: string
      text_372: string
      text_373: string
      text_374: string
      text_375: string
      text_376: string
      text_377: string
      text_378: string
      text_379: string
      text_380: string
      text_381: string
      text_382: string
      text_383: string
      text_384: string
      text_385: string
      text_386: string
      text_387: string
      text_388: string
      text_389: string
      text_390: string
      text_391: string
      text_392: string
      text_393: string
      text_394: string
      text_395: string
      text_396: string
      text_397: string
      text_398: string
      text_399: string
      text_400: string
      text_401: string
      text_402: string
      text_403: string
      text_404: string
    }
    privacy_policy: {
      text_1: string
      text_2: string
      text_3: string
      text_4: string
      text_5: string
      text_6: string
      text_7: string
      text_8: string
      text_9: string
      text_10: string
      text_11: string
      text_12: string
      text_13: string
      text_14: string
      text_15: string
      text_16: string
      text_17: string
      text_18: string
      text_19: string
      text_20: string
      text_21: string
      text_22: string
      text_23: string
      text_24: string
      text_25: string
      text_26: string
      text_27: string
      text_28: string
      text_29: string
      text_30: string
      text_31: string
      text_32: string
      text_33: string
      text_34: string
      text_35: string
      text_36: string
      text_37: string
      text_38: string
      text_39: string
      text_40: string
      text_41: string
      text_42: string
      text_43: string
      text_44: string
      text_45: string
      text_46: string
      text_47: string
      text_48: string
      text_49: string
      text_50: string
      text_51: string
      text_52: string
      text_53: string
      text_54: string
      text_55: string
      text_56: string
      text_57: string
      text_58: string
      text_59: string
      text_60: string
      text_61: string
      text_62: string
      text_63: string
      text_64: string
      text_65: string
      text_66: string
      text_67: string
      text_68: string
      text_69: string
      text_70: string
      text_71: string
      text_72: string
      text_73: string
      text_74: string
      text_75: string
      text_76: string
      text_77: string
      text_78: string
      text_79: string
      text_80: string
      text_81: string
      text_82: string
      text_83: string
      text_84: string
      text_85: string
      text_86: string
      text_87: string
      text_88: string
    }
    responsible_gambling: {
      text_1: string
      text_2: string
      text_3: string
      text_4: string
      text_5: string
      text_6: string
      text_7: string
      text_8: string
      text_9: string
      text_10: string
      text_11: string
      text_12: string
      text_13: string
      text_14: string
      text_15: string
      text_16: string
      text_17: string
      text_18: string
      text_19: string
      text_20: string
      text_21: string
      text_22: string
      text_23: string
      text_24: string
      text_25: string
      text_26: string
      text_27: string
      text_28: string
      text_29: string
      text_30: string
      text_31: string
      text_32: string
      text_33: string
      text_34: string
      text_35: string
      text_36: string
      text_37: string
      text_38: string
      text_39: string
      text_40: string
      text_41: string
      text_42: string
      text_43: string
      text_44: string
      text_45: string
      text_46: string
      text_47: string
      text_48: string
      text_49: string
      text_50: string
      text_51: string
      text_52: string
    }
    bonus_terms: {
      text_1: string
      text_2: string
      text_3: string
      text_4: string
      text_5: string
      text_6: string
      text_7: string
      text_8: string
      text_9: string
      text_10: string
      text_11: string
      text_12: string
      text_13: string
      text_14: string
      text_15: string
      text_16: string
      text_17: string
      text_18: string
      text_19: string
    }
    payment_methods: {
      text_1: string
      text_2: string
      text_3: string
      text_4: string
      text_5: string
      text_6: string
      text_7: string
      text_8: string
      text_9: string
      text_10: string
      text_11: string
      text_12: string
      text_13: string
      text_14: string
      text_15: string
      text_16: string
      text_17: string
      text_18: string
      text_19: string
    }
    referral_system: {
      text_1: string
      text_2: string
      text_3: string
      text_4: string
      text_5: string
      text_6: string
      text_7: string
      text_8: string
      text_9: string
      text_10: string
      text_11: string
      text_12: string
      text_13: string
      text_14: string
      text_15: string
      text_16: string
      text_17: string
      text_18: string
      text_19: string
      text_20: string
      text_21: string
      text_22: string
      text_23: string
      text_24: string
      text_25: string
      text_26: string
      text_27: string
      text_28: string
      text_29: string
      text_30: string
      text_31: string
      text_32: string
    }
    aml_policy: {
      text_1: string
      text_2: string
      text_3: string
      text_4: string
      text_5: string
      text_6: string
      text_7: string
      text_8: string
      text_9: string
      text_10: string
      text_11: string
      text_12: string
      text_13: string
      text_14: string
      text_15: string
      text_16: string
      text_17: string
      text_18: string
      text_19: string
      text_20: string
      text_21: string
      text_22: string
      text_23: string
      text_24: string
      text_25: string
      text_26: string
      text_27: string
      text_28: string
      text_29: string
      text_30: string
      text_31: string
      text_32: string
      text_33: string
      text_34: string
      text_35: string
      text_36: string
      text_37: string
      text_38: string
      text_39: string
      text_40: string
      text_41: string
      text_42: string
      text_43: string
      text_44: string
      text_45: string
      text_46: string
      text_47: string
      text_48: string
      text_49: string
      text_50: string
      text_51: string
      text_52: string
      text_53: string
      text_54: string
      text_55: string
      text_56: string
      text_57: string
      text_58: string
      text_59: string
      text_60: string
      text_61: string
      text_62: string
      text_63: string
      text_64: string
      text_65: string
      text_66: string
      text_67: string
      text_68: string
      text_69: string
      text_70: string
      text_71: string
      text_72: string
      text_73: string
      text_74: string
      text_75: string
      text_76: string
      text_77: string
      text_78: string
      text_79: string
      text_80: string
      text_81: string
      text_82: string
      text_83: string
      text_84: string
      text_85: string
      text_86: string
      text_87: string
      text_88: string
      text_89: string
      text_90: string
      text_91: string
      text_92: string
      text_93: string
      text_94: string
      text_95: string
      text_96: string
      text_97: string
      text_98: string
      text_99: string
      text_100: string
      text_101: string
      text_102: string
      text_103: string
      text_104: string
      text_105: string
      text_106: string
      text_107: string
      text_108: string
      text_109: string
      text_110: string
      text_111: string
      text_112: string
      text_113: string
      text_114: string
      text_115: string
      text_116: string
      text_117: string
      text_118: string
      text_119: string
      text_120: string
      text_121: string
    }
    kyc_policy: {
      text_1: string
      text_2: string
      text_3: string
      text_4: string
      text_5: string
      text_6: string
      text_7: string
      text_8: string
      text_9: string
      text_10: string
      text_11: string
      text_12: string
      text_13: string
      text_14: string
      text_15: string
      text_16: string
      text_17: string
      text_18: string
      text_19: string
      text_20: string
      text_21: string
      text_22: string
      text_23: string
      text_24: string
      text_25: string
      text_26: string
      text_27: string
      text_28: string
      text_29: string
      text_30: string
      text_31: string
      text_32: string
      text_33: string
      text_34: string
      text_35: string
      text_36: string
      text_37: string
      text_38: string
      text_39: string
    }
  }
  home: {
    search: string
    live_win: {
      text_1: string
    }
    button: {      
      all_game: string
      favorite: string
      recently_played: string
      original_game: string
      pg_soft: string
      slots: string
      live_casino: string
    }
    search_dialog : {
      text_1: string
      text_2: string
      text_3: string
      text_4: string
      text_5: string
      text_6: string
      search_history: string
    }
    original_games: string
    more: string
    more_text_1: string
    more_text_2: string
    more_text_3: string
    principal: string
    game_providers: string
    slots: string
    live_casino: string
    rank_text: string
    player_text: string
    profit_text: string
    game_text: string
    amount_text: string
    lucky_jackpot_text: string
    latest_record_text: string
    bet_history: {
      text_1: string
      text_2: string
      text_3: string
      text_4: string
      text_5: string
      text_6: string
      text_7: string
      text_8: string
      text_9: string
      text_10: string
      text_11: string
      text_12: string
      text_13: string
    }
    footer: {
      game: {
        title: string
        menu_1: string
        menu_2: string
        menu_3: string
        menu_4: string
      }
      helpful_links: {
        title: string
        menu_1: string
        menu_2: string
      }
      about_us: {
        title: string
        text_1: string
        text_2: string
        text_3: string
        text_4: string
        text_5: string
        text_6: string
        text_7: string
        text_8: string
      }
      footer_4: {
        text: string
      }
      logo: {
        text_1: string
        text_2: string
      }
      footer_6: {
        text: string
      }
    }
  }
  mobile_menu: {
    menu: string
    casino: string
    share: string
    sport: string
    mail: string
    reward: string
    search: string
    promo: string
  }
  deposit_dialog: {
    deposit_info: {
      text_1: string
      text_2: string
      text_3: string
      text_4: string
      text_5: string
      text_6: string
    }
    deposit_currency: string
    choose_payment_method: string
    deposit_amount: string
    amount: string
    validation: {
      text_1: string
      text_2: string
      text_3: string
    }
    check_text: string
    other_text: string
    other_text_1: string
    deposit_btn_text: string
    personal_information: {
      header_text: string
      id_text: string
      first_name: string
      last_name: string
      confirm_text: string
      confirm_success_text: string
      confirm_warning_text: string
    }
  }
  transaction_history: {
    type: {
      text_1: string
      text_2: string
      text_3: string
      text_4: string
      text_5: string
      text_6: string
      text_7: string
      text_8: string
      text_9: string
      text_10: string
      text_11: string
      text_12: string
      text_13: string
      text_14: string
    }
  }
  withdraw_dialog: {
    withdraw_currency: string
    withdraw_payment_method: string
    withdraw_amount: string
    amount: string
    validation: {
      text_1: string
      text_2: string
      text_3: string
    }
    personal_information: {
      header_text: string
      id_text: string
      first_name: string
      last_name: string
      confirm_text: string
      confirm_success_text: string
      confirm_warning_text: string
    }
    text_1: string
    text_1_1: string
    text_2: string
    text_3: string
    text_4: string
    other_text: string
    other_text_1: string
    withdraw_btn_text: string
    withdraw_warning_text: string
  }
  mail_dialog: {
    header_text: string
  }
  affiliate: {
    tab: {
      text_1: string
      text_2: string
      text_3: string
      text_4: string
    }
    invite: {
      text_1: string
      text_2: string
      text_3: string
      text_4: string
      text_5: string
      text_6: string
      text_7: string
      text_8: string
      text_9: string
      text_10: string
      invite_partner: string
      invited_user: string
      deposit_user: string
      bonus_today: string
      bonus_yesterday: string
      monthly_revenu_goal: string
      more_people_text: string
      premiums_text: string
      invitation_bonus: string
      betting_commision: string
      how_does_work: string
      how_does_content_1: string
      how_does_content_2: string
      achivement_bonus: string
      achivement_bonus_text_1: string
      agent_realization_text: string
      receive_btn_text: string
      commission_title_text: string
      commission_content_text: string
      invite_text_1: string
      invite_text_2: string
      invite_text_3_1: string
      invite_text_3_2: string
      invite_text_4_1: string
      invite_text_4_2: string
      invite_text_5_1: string
      invite_text_5_2: string
      invite_text_6: string
      invite_text_7: string
      invite_text_8: string
      invite_text_9: string
      invite_text_10: string
      invite_text_11: string
      invite_text_12: string
      help_text_1: string
      help_text_2: string
      bonus_dialog: {
        text_1: string
        text_2: string
        text_3: string
      }
    }
    achievement: {
      text_1: string
      text_2: string
      text_3: string
      text_4: string
      text_5: string
    }
    statistics: {
      level_text: string
      grade_text_1: string
      grade_text_2: string
      grade_text_3: string
      text_4: string
      text_5: string
      text_6: string
      text_7: string
      text_8: string
      text_9: string
      text_10: string
      text_11: string
      summary_text: string
      receive_btn_text: string
      total_profit_text: string
      mobile_profit_title: string
      text_1: string
      text_2: string
      text_3: string
      tab: {
        text_1: string
        text_2: string
        text_3: string
        today: {
          profit_today_text: string
        }
        week: {
          profit_this_week_text: string
        }
        month: {
          profit_this_month_text: string
        }
        profit_tab_text_1: string
        profit_tab_text_2: string
        profit_tab_text_3: string
        profit_tab_text_4: string
        profit_tab_text_5: string
      }
    }
    forms: {
      table: {
        time: string
        user: string
        event: string
        bonus: string
      }
    }
  }
  bonus: {
    title_text: string
    account_balance: string
    bonus_money: string
    total_text: string
    withdraw_text: string
    super_bonus_text: string
    bonus_text: string
    no_active_text: string
    cashable_progress: string
    table: {
      date: string
      deposit: string
      receive: string
      wager: string
    },
    dashboard_recharge_title1 : string
    dashboard_recharge_title2 : string
    dashboard_recharge_content1 : string
    dashboard_recharge_content2 : string
    text_1: string
    text_2: string
    text_3: string
    text_4: string
    text_5: string
    dialog: {
      title_text: string
      content_text_1: string
      determine_btn_text: string
      cancel_btn_text: string
    }
  }
  transaction: {
    tab: {
      game_history: string
      transactions: string
      deposit: string
      withdrawal: string
      vip: string
      referral: string
    }
    game_history: {
      game: string
      date: string
      amount: string
      multilier: string
      betId: string
      status: string
      profit: string
    }
    transactions: {
      date: string
      amount: string
      type: string
      id: string
      note: string
      balance: string
    }
    withdraw: {
      action: string
      refund: string
    }
    vip: {
      text_1: string
      text_2: string
      text_3: string
      text_4: string
      text_5: string
      text_6: string
      text_7: string
      text_8: string
      text_9: string
      text_10: string
      text_11: string
    }
  }
  account: {
    menu: {
      user_info_text: string
      personal_info_text: string
      document_text: string
      preference_text: string
      suspend_account_text: string
    }
    sub_menu: {
      user_info_text: string
      personal_info_text: string
      document_text: string
      preference_text: string
      suspend_account_text: string
    }
    item: {
      nick_name_text: string
      email_text: string
      area_text: string
      phone_text: string
      current_pwd_text: string
    }
    back_text: string
    edit_text: string
    save_text: string
    exist_validation_text: string
    phone_warning_text: string
    verify_code_text: string
    edit_password_text: string
    edit_nick_name_text: string
    edit_email_text: string
    edit_phone_text: string
    password: {
      current_text: string
      new_text: string
      repeat_text: string
    }
    repeat_validation_text: string
    suspend_account: {
      help_text: string
      duration_text: string
      minimum_duration_text: string
      confirm_text: string
      dialog: {
        title_text: string
        content_text_1: string
        content_text_2: string
        determine_btn_text: string
        cancel_btn_text: string
      }
    }
  }
  refferal: {
    app_bar_title: string
    earn_btn_text: string
    dialog: {
      header: {
        title_text: string
        body_text: string
        body_text_1: string
        body_text_2: string
        body_text_3: string
        body_text_4: string
      }
      body: {
        text_1: string
        text_2: string
        text_3: string
        copy_btn_text: string
      }
    }
    copy_success_text: string
    description: {
      text_1: string
      text_2: string
      term_text: string
      text_3: string
      back_btn_text: string
    }
  }
  vip: {
    slider: {
      title_text: string
    }
    all_bonus_text: string
    cash_back_text: string
    super_carousel_text: string
    welfare_task: string
    reward_text: string
    reward_card_1: {
      daily_free_bonus_text: string
      text_1: string
      text_2: string
    }
    reward_card_2: {
      vip_week_gift_text: string
      text_1: string
      text_2: string
      text_3: string
      text_4: string
    }
    reward_card_3: {
      vip_month_gift_text: string
      text_1: string
      text_2: string
      text_3: string
      text_4: string
    }
    reward_card_4: {
      vip_upgrage_gift_text: string
      text_1: string
      text_2: string
      text_3: string
    }
    receive_btn_text: string
    cashback_body: {
      text_1: string
      text_2: string
      text_3: string
      text_4: string
      text_5: string
      text_7: string
      text_8: string
      text_9: string
      text_10: string
      text_11: string
      text_12: string
      text_13: string
      text_14: string
      text_15: string
    }
    super_spin_body: {
      text_1: string
      text_2: string
      text_3: string
      text_4: string
      text_5: string
    }
    vip_mission_body: {
      text_1: string
      text_2: string
      text_3: string
      text_4: string
      text_5: string
      text_6: string
      text_7: string
      text_8: string
      text_9: string
      text_10: string
      text_11: string
      text_12: string
      text_13: string
      text_15: string
    }
    benifit_description_body: {
      text_1: string
      text_2: string
      text_3: string
      text_4: string
      text_5: string
      text_6: string
      text_7: string
      text_8: string
      text_9: string
      text_10: string
      text_11: string
      text_12: string
      text_13: string
      text_14: string
      text_15: string
      text_16: string
      text_17: string
      text_18: string
      text_19: string
      text_20: string
      text_21: string
      text_22: string
      text_23: string
      text_24: string
    }
    footer_body: {
      text_1: string
      text_2: string
      text_3: string
    }
    login_bonus: {
      title_text: string
      day_1_text: string
      day_2_text: string
      day_3_text: string
      day_4_text: string
      day_5_text: string
      day_6_text: string
      day_7_text: string
      day_8_text: string
      footer_text_1: string
      footer_text_2: string
      footer_text_3: string
      footer_text_4: string
    }
    roulette_bonus: {
      paid_text: string
      roulette_btn_text: string
      victory_btn_text: string
      winner_text: string
      prize_winner_text: string
      help_menu: {
        title_text: string
        text_1: string
        text_2: string
        text_3: string
        text_4: string
        text_5: string
        text_6: string
        text_7: string
        text_8: string
        text_9: string
        text_10: string
      }
    }
    vip_level_content: {
      text_1: string
      text_2: string
      text_3: string
      text_4: string
      text_5: string
      text_6: string
      text_7: string
      text_8: string
      text_9: string
    },
    vip_level_info: {
      black_iron: {
        bonus: string,
        rebate: string,
        fee: string
      },
      bronze: {
        bonus: string,
        rebate: string,
        fee: string,
      },
      silver: {
        bonus: string,
        rebate: string,
        fee: string,
      },
      gold: {
        bonus: string,
        rebate: string,
        fee: string,
      },
      platinum: {
        bonus: string,
        rebate: string,
        fee: string,
      },
      diamonds: {
        bonus: string,
        rebate: string,
        fee: string,
      },
      yellow_diamond: {
        bonus: string,
        rebate: string,
        fee: string,
      },
      blue_diamond: {
        bonus: string,
        rebate: string,
        fee: string,
      }
    }
  }
  exception: {
    text_1: string
    text_2: string
    text_3: string
    text_4: string
    text_5: string
    text_6: string
    text_7: string
    text_8: string
    text_9: string
    text_10: string
    text_11: string
    text_12: string
    text_13: string
    text_14: string
    text_15: string
    text_16: string
    text_17: string
    text_18: string
    text_19: string
    text_20: string
    text_21: string
    text_22: string
    text_23: string
    text_24: string
    text_25: string
    text_26: string
    text_27: string
    text_28: string
    text_29: string
    text_30: string
    text_31: string
    text_32: string
    text_33: string
    text_34: string
    text_35: string
    text_36: string
    text_37: string
    text_38: string
    text_39: string
    text_40: string
    text_41: string
    text_42: string
  }
  confirm: {
    text_1: string
    text_2: string
  }
  get_bonus: {
    text_1: string
    text_2: string
    text_3: string
    text_4: string
  }
  provider: {
    text_1: string
    text_2: string
    text_3: string
    text_4: string
    text_5: string
    text_6: string
  }
  reward: {
    text_1: string
    text_2: string
    text_3: string
    text_4: string
    text_5: string
    text_6: string
    text_7: string
    text_8: string
    text_9: string
    text_10: string
    text_11: string
    text_12: string
    text_13: string
    text_14: string
    text_15: string
    text_16: string
    text_17: string
    text_18: string
    text_19: string
    text_20: string
    text_21: string
    text_22: string
    success_text: string
    err_text: string
  }
  level_up: {
    text_1: string
    text_2: string
    text_3: string
    text_4: string
    text_5: string
    text_6: string
    text_7: string
  },
  agent: {
    text_1: string
    text_2: string
    text_3: string
    text_4: string
    text_5: string
    text_6: string
    text_7: string
    text_8: string
    text_9: string
    text_10: string
    text_11: string
    text_12: string
    text_13: string
    text_14: string
    text_15: string
    text_16: string
    text_17: string
    text_18: string
    text_19: string
    text_20: string
    text_21: string
    text_22: string
    text_23: string
    text_24: string
    text_25: string
    text_26: string
    text_27: string
    text_28: string
    text_29: string
    text_30: string
    text_31: string
    text_32: string
    text_33: string
    text_34: string
    text_35: string
    text_36: string
    text_37: string
    text_38: string
    text_39: string
    text_40: string
    text_41: string
    text_42: string
    text_43: string
    text_44: string
    text_45: string
    text_46: string
    text_47: string
    text_48: string
    text_49: string
    text_50: string
    text_51: string
    text_52: string
    text_53: string
    text_54: string
    text_55: string
    text_56: string
  }
  promo: {
    text_1: string
    text_2: string
    text_3: string
    text_4: string
    text_5: string
    text_6: string
    text_7: string
    text_8: string
    text_9: string
    text_10: string
    text_11: string
    text_12: string
    text_13: string
    text_14: string
    text_15: string
    text_16: string
    text_17: string
    text_18: string
    text_19: string
    text_20: string
    text_21: string
    text_22: string
    text_23: string
    text_24: string
    text_25: string
    text_26: string
    text_27: string
    text_28: string
    text_29: string
    text_30: string
    text_31: string
    text_32: string
    text_33: string
    text_34: string
    text_35: string
    text_36: string
    text_37: string
  },
  game_confirm: {
    text_1: string
    text_2: string
  }
};