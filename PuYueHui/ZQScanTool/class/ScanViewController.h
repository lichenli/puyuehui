//
//  ScanViewController.h
//  ZQScanViewController
//
//  Created by 肖兆强 on 2018/1/26.
//  Copyright © 2018年 JWZT. All rights reserved.
//

#import <UIKit/UIKit.h>
@protocol SendScanDataDelegate<NSObject>

-(void)scanData:(NSString*)scanDatas;

@end

@interface ScanViewController : UIViewController

@property (nonatomic, weak)id <SendScanDataDelegate>scanDelegate;

@end
