//
//  WKDelegateController.h
//  HFYouLife
//
//  Created by Li Chen on 2018/6/29.
//  Copyright © 2018年 华发新科技. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <WebKit/WebKit.h>
@protocol WKDelegate <NSObject>

- (void)userContentController:(WKUserContentController *)userContentController didReceiveScriptMessage:(WKScriptMessage *)message;

@end

@interface WKDelegateController : UIViewController <WKScriptMessageHandler>

@property (weak , nonatomic) id<WKDelegate> delegate;

@end

